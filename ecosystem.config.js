const path = require('path');

module.exports = {
  apps: [
    {
      name: path.dirname(__filename).split(path.sep).pop(), // Nombre del directorio actual
      script: 'java',
      args: ['-jar', 'Lavalink.jar'],
      // eslint-disable-next-line camelcase
      // cron_restart: '0 0 * * *', // A las 00:00
      env: {
        NODE_OPTIONS: '--no-warnings=ExperimentalWarning',
      },
    },
  ],
};
