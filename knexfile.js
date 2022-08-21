// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user: 'postgres',
      password: 'postgres',
    },
    seeds: {
      directory: './database/seeds',
    },
    migrations: {
      directory: './database/migrations',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user: 'postgres',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user: 'postgres',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: './database/seeds',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations',
    },
  },
};
