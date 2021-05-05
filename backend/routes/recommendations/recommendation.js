const express = require('express');
const router = express.Router();
const Recommendation = require('../../models/RecommendationModel');
const auth = require('../../middleware/auth');

router.post('/', auth, async (req, res) => {
  try {
    const { poi, nearby } = req.body;

    if (!poi) {
      res.status(400).send('Point of interest is needed');
    }

    let results = new Recommendation({
      poi,
      nearby,
    });

    await results.save();
    res.status(200).send('Recommendation Updated');
  } catch (error) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
