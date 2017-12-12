var express = require('express');
var router = express.Router();
var expressSession = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
