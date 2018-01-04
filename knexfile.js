// Update with your config settings.

const path = require('path');

const BASE_PATH = path.join('src', 'server', 'db');

module.exports = {
  development: {
    client: 'postgres',
    connection: 'postgres://<username>:<password>@<hostname>:<port>/<dbname>',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
};
