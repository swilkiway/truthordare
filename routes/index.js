var express = require('express');
var router = express.Router();
var expressSession = require('express-session');
var users = require('../controllers/user_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/user', function(req, res){
    console.log("/user Route");
    if (req.session.user) {
      res.render('user', {msg:req.session.msg});
    } else {
      req.session.msg = 'Access denied!';
      res.redirect('/signin');
    }
});
router.get('/signin',  function(req, res){
    console.log("/signin Route");
    if(req.session.user){
      res.redirect('/');
    }
    res.render('signin', {msg:req.session.msg});
});

router.post('/signin', users.signin);

module.exports = router;
