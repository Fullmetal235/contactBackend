exports.up = function(knex) {
  return knex.schema.createTable("contacts", tbl => {
    tbl.increments();
    tbl.string("fullName", 255).notNullable();
    tbl.string("email", 255).notNullable();
    tbl.string("message", 1000);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("contacts");
};
