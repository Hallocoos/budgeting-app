const dotenv = require('dotenv').config()

const Name = process.env.MYSQL_DATABASE
const Host = process.env.MYSQL_HOSTNAME
const User = process.env.MYSQL_USERNAME
const Pass = process.env.MYSQL_PASSWORD

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      user: User,
      password: Pass,
      database: Name,
      host: Host
    },
    migrations: {
      directory: __dirname + '/database/migration'
    },
    seeds: {
      directory: __dirname + '/database/seeds/development'
    }
  },
  production: {
    client: 'mysql',
    connection: {
      user: User,
      password: Pass,
      database: Name,
      host: Host
    },
    migrations: {
      directory: __dirname + '/database/migration'
    },
    seeds: {
      directory: __dirname + '/database/seeds/production'
    }
  }
}
