const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

var distance = require('google-distance-matrix');
var solver = require('node-tspsolver');

var origins = ['San Francisco CA', 'Los Angeles', 'Napa Valley', 'San Diego'];
var destinations = [
  'San Francisco CA',
  'Los Angeles',
  'Napa Valley',
  'San Diego',
];

distance.key('AIzaSyC9YmvT5MgBbbaBSoO0m_h9zGHHK9s_W2Y');
distance.units('imperial');

router.get('/', async (req, res) => {
  const matrix = [];
  try {
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
      solver.solveTsp(matrix, false, {}).then(function (result) {
        console.log(result); // result is an array of indices specifying the route.
      });
    });

    console.log('Result OUT: ', matrix);
    res.send('Success');
  } catch (error) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

/*
arr1 = [1,2];
arr2 = [10,30];

1 -> 10, 30
2 -> 10, 30
*/
