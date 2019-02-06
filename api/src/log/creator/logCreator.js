
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.File({ filename: 'src/log/log.log', level: 'info' }),
  ]
});

console.log('entrou');

module.exports = logger;
