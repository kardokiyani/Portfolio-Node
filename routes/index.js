var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
  // Read recommendations.json
  let recommendationsData = fs.readFileSync(
    path.resolve(__dirname, '../data/recommendations.json')
  );
  let recommendations = JSON.parse(recommendationsData);

  // Pass recommendations data to index.ejs view
  res.render('index', { title: 'Express', data: recommendations });
});

module.exports = router;
