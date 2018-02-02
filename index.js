const express = require( 'express' );
const mongoose = require( 'mongoose' );
const keys = require( './config/keys' );
const passport = require( 'passport' );
const cookieSession = require( 'cookie-session' ); 
const bodyParser = require( 'body-parser');

require('./models/user');
require('./services/passport');

mongoose.connect( keys.mongoURI, () => {
    console.log("connected!!");
} );

const app = express();

// middlewares to modify incoming request before they are sent off to route handlers

// Adding post or put incoming req data to the req.body parameter
app.use( bodyParser.json() ); 

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [ keys.cookieKey ]
    })
);

app.use( passport.initialize() );
app.use( passport.session() );

// var authRoutes = require('./routes/authRoutes') and then authRoutes( app ) also works
// handling routes
require( './routes/authRoutes' )( app );
require( './routes/billingRoutes' )( app );

if( process.env.NODE_ENV === 'production' ){
    //Express will serve up production  assets like out main,js file
    app.use( express.static( 'client/build' ));

    //Express will serve the index.html file if diesnot recognize the route
    const path = require( 'path' );
    app.get( '*', ( req, res ) => {
        res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html' ));
    });
}

const PORT = process.env.PORT || 5000;
app.listen( PORT );