const { createLogger, format, transports } = require('winston');

const { timestamp, prettyPrint } = format;

const logger = createLogger({
  level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
  format: format.combine(timestamp(), format.simple(), prettyPrint()),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.simple()
    })
  );
}

module.exports = logger;
