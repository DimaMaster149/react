import express  from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import index from '../routes/index';
import api from '../routes/api';

//import config from './config';

const app = express();

//======================================================
//=================== AUTH CONFIG ======================

// import session from 'cookie-session';
// import passport from 'passport';
//
// app.use( session( config.session ));
// app.use( passport.initialize() );
// app.use( passport.session( config.session ) );

//passport configuration
//require('../auth/config')(passport);
// ===================================================

// ============== EJS CONFIGURATION ====================
// view engine setup
app.set('views', path.join('server', 'mvc', 'views'));
app.set('view engine', 'ejs');

// =====================================================

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join('server', 'public')));

// ======================================================
// ================ ROUTES BINDING ======================

app.use('/', index);
app.use('/api', api);

// ======================================================

// ================= ERROR HANDLING =====================
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
