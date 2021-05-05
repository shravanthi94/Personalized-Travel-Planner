const express = require('express');
const router = express.Router();
const Recommendation = require('../../models/RecommendationModel');
const auth = require('../../middleware/auth');

// router.post('/', auth, async (req, res) => {
//   try {
//     const { poi, nearby } = req.body;

//     if (!poi) {
//       res.status(400).send('Point of interest is needed');
//     }

//     let results = new Recommendation({
//       poi,
//       nearby,
//     });

//     await results.save();
//     res.status(200).send('Recommendation Updated');
//   } catch (error) {
//     console.log(err.message);
//     res.status(500).send('Server Error');
//   }
// });

router.post('/view', auth, async (req, res) => {
  args1 = req.body.freeTextInput;
  const { spawn } = require('child_process');
  const pyProg = spawn('python', ['backend/MLFiles/dummy.py', args1]);

  pyProg.stdout.on('data', function (data) {
    console.log(data.toString());
    res.status(200).send(['Los Angeles', 'Napa Valley', 'Santa Barbara']);
    res.end('end');
  });
});

module.exports = router;
