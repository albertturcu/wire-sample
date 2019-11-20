 
const fs = require('fs');
const dotenv = require('dotenv');
const logger = require('./logger');

if (fs.existsSync('.env')) {
  logger.debug('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
} else {
  logger.debug('Using .env.example file to supply config environment variables');
}

const { env } = process;
const prod = env.NODE_ENV === 'production';

if (!env.SESSION_SECRET) {
  logger.error('No client secret. Set SESSION_SECRET environment variable.');
  process.exit(1);
}

if (prod && !env.MONGODB_URI) {
  logger.error('No mongo connection string. Set MONGODB_URI environment variable.');
  process.exit(1);
}

if (!prod && !env.MONGODB_URI_LOCAL) {
  logger.error('No mongo connection string. Set MONGODB_URI_LOCAL environment variable.');
  process.exit(1);
}

if (!env.PORT) {
  logger.error('Server Port number is not specified');
  process.exit(1);
}

if (prod && !env.MONGODB_URI) {
  logger.error('No mongo connection string. Set MONGODB_URI environment variable.');
  process.exit(1);
}

exports.PORT = env.PORT;
exports.ENVIRONMENT = env.NODE_ENV;
exports.SESSION_SECRET = env.SESSION_SECRET;
exports.MONGODB_URI = prod ? env.MONGODB_URI : env.MONGODB_URI_LOCAL;
exports.MONGODB_URI_TEST_LOCAL = env.MONGODB_URI_TEST_LOCAL;
