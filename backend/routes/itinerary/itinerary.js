const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Itinerary = require('../../models/ItineraryModel');

var distance = require('google-distance-matrix');
var solver = require('node-tspsolver');
const PythonShell = require('python-shell').PythonShell;

distance.key('AIzaSyC9YmvT5MgBbbaBSoO0m_h9zGHHK9s_W2Y');
distance.units('imperial');

router.post('/', async (req, res) => {
  let { tripType, days, poi } = req.body;

  // Sending data to PYTHON FILE
  var temp = tripType.substring(1, tripType.length - 1);
  const nlp = temp.split(',');

  for (var i = 0; i < nlp.length; i++) {
    nlp[i] = nlp[i].replace(/'/g, '').trim();
  }

  let options = {
    mode: 'text',
    pythonPath: 'python3',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '/Users/Chandu/Desktop/shared_files',
    args: [parseInt(days), poi, nlp],
  };

  PythonShell.run('POI_Nearby_Recc.py', options, function (err, results) {
    if (err) throw err;
    console.log(results[0]);

    var result = results[0].substring(1, results[0].length - 1);
    const dest = result.split(',');

    for (var i = 0; i < dest.length; i++) {
      dest[i] = dest[i].replace(/'/g, '').trim();
    }
    res.send(dest);
  });
});

router.post('/view', async (req, res) => {
  var { data } = req.body;
  var origins = data;
  var destinations = data;
  try {
    const matrix = [];

    distance.matrix(origins, destinations, (err, distances) => {
      if (err) {
        return console.log(err);
      }
      if (!distances) {
        return console.log('no distances');
      }
      if (distances.status == 'OK') {
        for (var i = 0; i < origins.length; i++) {
          let tempArr = [];
          for (var j = 0; j < destinations.length; j++) {
            if (distances.rows[0].elements[j].status == 'OK') {
              var distance = distances.rows[i].elements[j].distance.text;
              if (distance == '1 ft') {
                tempArr.push(0);
              } else {
                var substrings = distance.split(' ');
                tempArr.push(parseInt(substrings[0]));
              }
            }
          }
          matrix.push(tempArr);
        }
      }
      console.log('Result IN: ', matrix);

      // Itinerary Generator
      solver
        .solveTsp(matrix, false, {})
        .then(function (result) {
          // console.log(result); // result is an array of indices specifying the route.
          const itin = [];
          for (var i = 0; i < result.length; i++) {
            var obj = {
              name: origins[result[i]],
              distance: 0,
            };
            if (i !== 0) {
              obj.distance = matrix[result[i - 1]][result[i]];
            }
            itin.push(obj);
          }
          console.log(itin);
          res.status(200).send(itin);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  } catch (error) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Save an itinerary
router.post('/save', auth, async (req, res) => {
  try {
    const { userID, itinerary } = req.body;
    const newItin = new Itinerary({
      userID,
      itinerary,
    });
    await newItin.save();
    res.send('Itinerary Saved');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Get Saved Itineraries of a user
router.get('/:userID', auth, async (req, res) => {
  try {
    const userID = req.params.userID;
    const result = await Itinerary.find({ userID: userID });
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
