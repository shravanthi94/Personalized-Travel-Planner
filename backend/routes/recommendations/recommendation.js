const express = require('express');
const router = express.Router();
const Recommendation = require('../../models/RecommendationModel');
const auth = require('../../middleware/auth');
const PythonShell = require('python-shell').PythonShell;
// const spacyNLP = require("spacy-nlp");
// var serverPromise = spacyNLP.server({ port: process.env.IOPORT });

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
  let options = {
    mode: 'text',
    pythonPath: 'python3',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '/Users/rakshithasathyakumar/Desktop/shared_files',
    args: [req.body.freeTextInput]
  };

  // console.log(req.body.freeTextInput)

  PythonShell.run('NLP_and_Recc_functions.py', options, function (err, results) {
    if (err) throw err;
    var result = {tripType: results[0], places: results[1] }
    res.end(JSON.stringify(result));
   });
});

module.exports = router;
