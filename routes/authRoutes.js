const passport = require('passport');

module.exports = ( app ) => {

	app.get( '/auth/google', passport.authenticate( 'google', {
			scope: [ 'profile', 'email' ]
		}) 
	);

	app.get( '/auth/google/callback', passport.authenticate( 'google', {
		
		}) 
	);

	app.get( '/api/logout', ( req, res ) => {
		req.logout();	// automatically given by passport - kills all the cookies and id inside  the request
		res.send( req.user );
	});

	app.get( '/api/current_user', ( req, res ) => {
		//console.log( req.session );	// stores user's id
		res.send( req.user );
	});

}