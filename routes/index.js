var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/forcelandia2015', function(req, res) {
  res.render('forcelandia2015', { title: 'forcelandia2015' });
});
router.get('/sponsors', function(req, res) {
  res.render('sponsors', { title: 'sponsors' });
});
router.get('/speakers', function(req, res) {
  res.render('speakers', { title: 'speakers' });
});

module.exports = router;
