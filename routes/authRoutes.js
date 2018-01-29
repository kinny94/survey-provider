const passport = require('passport');

module.exports = ( app ) => {

	app.get( '/auth/google', passport.authenticate( 'google', {
			scope: [ 'profile', 'email' ]
		}) 
	);

	app.get( '/auth/google/callback', passport.authenticate( 'google' ), ( req, res ) => {
		res.redirect( "/surveys" );
	});

	app.get( '/api/logout', ( req, res ) => {
		req.logout();	// automatically given by passport - kills all the cookies and id inside  the request
		res.redirect( "/" );
	});

	app.get( '/api/current_user', ( req, res ) => {
		//console.log( req.session );	// stores user's id
		res.send( req.user );
	});

}