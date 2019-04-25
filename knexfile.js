// Update with your config settings.

require('dotenv').config()
const pg = require('pg')
pg.defaults.ssl = true


const localConnection = {
  host: 'localhost',
  database: 'my_db',
  user:     'username',
  password: 'password'
}

const prodDBConnection = process.env.DATABASE_URL || localConnection

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/ride4life.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: prodDBConnection,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
