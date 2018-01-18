const express = require( 'express' );
const passport = require( 'passport' );
const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;

const app = express();
passport.use( new GoogleStrategy() );

//378318128980-gsdgnccn3e8rgl1j5ao3p1vmo75oh63s.apps.googleusercontent.com - Client Id
// PTBMuADdOWojRj5R0zXRITum - Client Secret

const PORT = process.env.PORT || 5000;
app.listen( PORT );