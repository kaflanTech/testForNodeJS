module.exports = function (app, passport) {
  app.get('/', function (req, res) { 
      // res.redirect('/login');
      console.log('data');
  });

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));
  
  app.get('/article', function(req, res){
     response.send();
  });

  app.get('/article/:id', function(req, res){

  });


  app.post('/article', function(req, res){

  });

  app.post('/article/:id', function(req, res){

  });

  app.put('/article', function(req, res){

  });

  app.put('/article/:id', function(req, res){

  });

 app.delete('/article', function(req, res){

  });

  app.delete('/article/:id', function(req, res){

  });
  

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
  
};

function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}