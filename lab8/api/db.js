const { Pool } = require('pg');

class Database {
  constructor() {
    this.config = {
      user: 'postgres',
      host: 'localhost',
      database: 'postgres',
      password: process.env.PASSWORD,
      port: 5432,
    };

    this.pool = new Pool(this.config);
  }

  query(sql) {
    return this.pool.query(sql);
  }

  close() {
    this.pool.end();
  }
}

module.exports = new Database();