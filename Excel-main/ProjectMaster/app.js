var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userRoutes');
var bussinessRouter = require('./routes/bussinessUnitRoutes');
var functionalgroupRouter = require('./routes/FunctionalGroupRoutes')
var projectDetailsRouter = require('./routes/projectdetailRoutes')
var RecourceDetail = require('./routes/RecourceDetailRoutes')
var ProjectResourceDetail = require('./routes/ProjectResourceDetailRoutes')
var RoleMasterRoutes = require('./routes/RoleMasterRoutes')
var HeatMap = require('./routes/HeatMapRoutes')



const errorHandler = require('./middleware/error-handler');
require('dotenv').config();
var app = express();
// global error handler
app.use(errorHandler);

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bussinessUnit',bussinessRouter);
app.use('/functionalgroup',functionalgroupRouter);
app.use('/projectDetails',projectDetailsRouter);
app.use('/recourcedetail',RecourceDetail)
app.use('/projectresourcedetail',ProjectResourceDetail)
app.use('/roleMasterroutes',RoleMasterRoutes)
app.use('/heatmap',HeatMap)




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
