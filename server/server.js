const app = require('./config/app');
const { PORT } = require('./config/secrets');
const logger = require('./config/logger');

app.listen(PORT, () => {
  logger.debug(`Boatbutler app listening on ${PORT}!`);
});
