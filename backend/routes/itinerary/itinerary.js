const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Itinerary = require('../../models/ItineraryModel');

var distance = require('google-distance-matrix');
var solver = require('node-tspsolver');
const PythonShell = require('python-shell').PythonShell;

var origins;
var destinations;

distance.key('AIzaSyC9YmvT5MgBbbaBSoO0m_h9zGHHK9s_W2Y');
distance.units('imperial');

router.post('/', async (req, res) => {
  var temp = req.body.tripType.substring(1, req.body.tripType.length - 1);
  const nlp = temp.split(',');


  for (var i = 0; i < nlp.length; i++) {
    nlp[i] = nlp[i].replace(/'/g, '').trim();
  }
  // console.log(typeof(cleaned))
  // console.log(typeof(parseInt(req.body.days)))
  // console.log(typeof(req.body.poi))
  let options = {
    mode: 'text',
    pythonPath: 'python3',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '/Users/rakshithasathyakumar/Desktop/shared_files',
    args: [parseInt(req.body.days), req.body.poi, nlp]
  };

  PythonShell.run('POI_Nearby_Recc.py', options, function (err, results) {
    if (err) throw err;
    console.log(results[0]);

    var result = results[0].substring(1, results[0].length - 1);
    const dest = result.split(',');

    for (var i = 0; i < dest.length; i++) {
    dest[i] = dest[i].replace(/'/g, '').trim();
    }
    // origins = dest.slice(0,5);
    // destinations = dest.slice(0,5);
  //  });

  
  
  try {
    const allOrigins = [];
    allOrigins.push(dest.slice(0,3));
    allOrigins.push(dest.slice(3, 6));
    allOrigins.push(dest.slice(6,9));

    // const final = {
    //   res1: [],
    //   res2: [],
    //   res3: []
    // };
    var final = []

    const ress = []
    for(var i=0; i<allOrigins.length; i++) {
      const matrix = [];
      console.log(allOrigins[i]);
      let origins = allOrigins[i];
      let destinations = allOrigins[i];
      ress[i] = distance.matrix(origins, destinations, (err, distances) => {
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
          return itin;
        })
        .catch((err) => {
          console.log(err);
        });
    });
    }
    console.log("FINALL OUTPUT",ress);
  } catch (error) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});
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
