const express = require( 'express' );
require('./services/passport');


const app = express();

// middlewares
// var authRoutes = require('./routes/authRoutes') and then authRoutes( app ) also works;
require('./routes/authRoutes')( app );

const PORT = process.env.PORT || 5000;
app.listen( PORT );