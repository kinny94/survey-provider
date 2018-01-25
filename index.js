const express = require( 'express' );
const mongoose = require( 'mongoose' );
const keys = require( './config/keys' );

require('./models/user');
require('./services/passport');

mongoose.connect( keys.mongoURI, () => {
    console.log("connected!!");
} );

const app = express();

// middlewares
// var authRoutes = require('./routes/authRoutes') and then authRoutes( app ) also works        ;
require('./routes/authRoutes')( app );

const PORT = process.env.PORT || 5000;
app.listen( PORT );