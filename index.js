const express = require( 'express' );
const mongoose = require( 'mongoose' );
const keys = require( './config/keys' );
const passport = require( 'passport' );
const cookieSession = require( 'cookie-session' ); 

require('./models/user');
require('./services/passport');

mongoose.connect( keys.mongoURI, () => {
    console.log("connected!!");
} );


const app = express();
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [ keys.cookieKey ]
    })
);

app.use( passport.initialize() );
app.use( passport.session() );

// middlewares
// var authRoutes = require('./routes/authRoutes') and then authRoutes( app ) also works        ;
require('./routes/authRoutes')( app );

const PORT = process.env.PORT || 5000;
app.listen( PORT );