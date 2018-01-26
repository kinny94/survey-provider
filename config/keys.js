// figure out what kind of credentials to use
if( process.env.NODE_ENV === 'production' ){
    // we are in production - return the prod set of keys
    module.exports = require( './prod' );
} else {
    // we are in development - return the keys
    module.exports = require( './dev' );
}