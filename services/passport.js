const passport = require( 'passport' );
const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;
const mongoose = require( 'mongoose' ); 
const keys = require( '../config/keys' ); 

const User = mongoose.model( 'users' );

passport.serializeUser(( user, done ) => {
    done( null, user.id );  //user.id automatically gives mongob id even if its _id in mongoDB - null argu is  for error
});

passport.deserializeUser(( id, done ) => {
    User.findById( id ).then(( user ) => {
        done( null, user );
    })    
});

passport.use( 
    new GoogleStrategy( 
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    
    ( accessToken, refreshToken, profile, done ) => {

        User.findOne({
            googleId: profile.id    
        }).then(( existingUser ) => {
            if( existingUser ){
                // we already have a record with this googleID
                console.log( "User id exists" );
                done( null, existingUser ); // first arguement is error
            }else{
                // we have a new user record
                new User({
                    googleId: profile.id
                }).save()
                .then(( user ) => {
                    done( null, user );
                })
            }
        })
    })      
);

    