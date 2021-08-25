
exports.up = function(knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('user_id').primary();
    table.string('user_name');
    table.string('user_email');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user');
};
