
exports.up = function(knex) {
  return knex.schema.createTable('book', (table) => {
    table.increments('book_id').primary();
    table.string('book_title').notNullable();
    table.string('book_author');
    table.string('book_ISBN');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('book');
};
