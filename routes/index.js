var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/LandingPage', async function(req, res, next) {  // Admin view

  
  res.render('LandingPage');
});
router.get('/Learn', async function(req, res, next) {  // Admin view

  
  res.render('LearnMore');
});
router.get('/about/*',function(req,res){
  var error='error content not find ';
  res.status(500).render('error',{error})
});

router.get('/Booking',async function(req, res, next) {
  res.render('Booking');
}); 

module.exports = router;
