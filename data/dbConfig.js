const knex = require('knex')('production')

const knexConfig = require('../knexfile.js');
const dbENV = process.env.db_ENV || 'production';
module.exports = knex(knexConfig[dbENV]);
