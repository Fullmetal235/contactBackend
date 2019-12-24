// Update with your config settings.

// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/contact.db3",
      useNullAsDefault: true
    },
    migrations: {
      directory: "./data/migrations"
    },
    production: {
      client: "pg",
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: "./migrations"
      },
      seeds: {
        directory: "./seeds"
      },
      pool: {
        afterCreate: (conn, done) => {
          conn.run("PRAGMA foreign_keys = ON", done);
        }
      },
      useNullAsDefault: true
    }
  }
};
