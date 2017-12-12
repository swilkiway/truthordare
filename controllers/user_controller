var crypto = require('crypto');
var mongoose = require('mongoose'),
    User = mongoose.model('User');
exports.signin = function(req, res){
var user = new User({username:req.body.username});
user.save(function(err) {
if (err){
req.session.error = err;
res.redirect('/signin');
} else {
req.session.user = user.id;
req.session.username = user.username;
req.session.msg = 'Your name is ' + user.username;
res.redirect('/');
}
});
};
exports.getUserProfile = function(req, res) {
  User.findOne({ _id: req.session.user })
  .exec(function(err, user) {
    if (!user){
      res.json(404, {err: 'User Not Found.'});
    } else {
      res.json(user);
    }
  });
};
