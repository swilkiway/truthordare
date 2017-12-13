var express = require('express');
var router = express.Router();
var expressSession = require('express-session');
var users = require('../controllers/user_controller');

/* GET home page. */
router.get('/', function(req, res){
    console.log("/ Route");
//    console.log(req);
    console.log(req.session);
    if (req.session.user) {
      console.log("/ Route if user");
      res.render('index', {username: req.session.username,
                           msg:req.session.msg,
                           });
    } else {
      console.log("/ Route else user");
      req.session.msg = 'Access denied!';
      res.redirect('/signin');
    }
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
router.get('/user/profile', users.getUserProfile);

module.exports = router;
