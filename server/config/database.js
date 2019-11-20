const mongoose = require('mongoose');
const logger = require('./logger');
const { ENVIRONMENT, MONGODB_URI } = require('./secrets');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
if (ENVIRONMENT !== 'production') {
  mongoose.set('debug', true);
}


mongoose.connect(MONGODB_URI).catch(err => {
  logger.error(err);
  process.exit(1);
});
mongoose.connection.on('connected', () => {
  logger.debug('Successfully connected to database');
});
mongoose.connection.on('disconnected', () => {
  logger.error('Mongoose default connection disconnected');
  process.exit(1);
});
mongoose.connection.on('error', err => {
  logger.error(`Mongoose default connection error: ${err}`);
  process.exit(1);
});
