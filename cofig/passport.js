var LocalStrategy = require('passport-local').Strategy;
var User = require('./user');
module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, emai, password, done) {
    User.findOne({ 'local.email': email }, function (err, user) {
      if (err)
        return done(err);

      // check to see if theres already a user with that email
      if (user) {
        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
      } else {

        // if there is no user with that email
        // create the user
        var newUser = new User();

        // set the user's local credentials
        newUser.local.email = email;
        newUser.local.password = newUser.generateHash(password); // use the generateHash function in our user model

        // save the user
        newUser.save(function (err) {
          if (err)
            throw err;
          return done(null, newUser);
        });
      });
  }));



};