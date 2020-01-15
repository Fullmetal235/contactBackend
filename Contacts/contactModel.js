const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.production);

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};

function find() {
  return db("contacts");
}

function findById(id) {
  return db("contacts")
    .where({ id: Number(id) })
    .first();
}

function insert(user) {
  return db("contacts")
    .insert(user)
    .then(ids => ({ id: ids[0] }));
}

function update(id, user) {
  return db("contacts")
    .where("id", Number(id))
    .update(user);
}

function remove(id) {
  return db("contacts")
    .where("id", Number(id))
    .del();
}
