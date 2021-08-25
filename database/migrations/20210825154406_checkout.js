
exports.up = function(knex) {
  return knex.schema.createTable('checkout', (table) => {
    table.increments('checkout_id').primary();
    table.integer('user_id');      
    table.integer('book_id');
    table.boolean('checkout_returned').defaultTo(false).notNullable();
    table.date('checkout_due_date');
    table.timestamps(true, true);
    table.foreign('user_id').references('user.user_id');
    table.foreign('book_id').references('book.book_id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('checkout');
};
