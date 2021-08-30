/* eslint-disable no-console */

// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class bookModel extends Model {
  static get tableName() {
    return 'book';
  }

  static get idColumn() {
    return 'book_id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['book_title', 'book_author', 'book_ISBN'],

      properties: {
        book_title: { type: 'string', maxLength: 50 },
        book_author: { type: 'string', maxLength: 50 },
        book_ISBN: { type: 'string', maxLength: 25 },
      },
    };
  }

  static get relationMappings() {
    const Checkout = require('./checkout.model');

    return {
      checkout: {
        relation: Model.HasManyRelation,
        modelClass: Checkout,
        join: {
          from: 'book.book_id',
          to: 'checkout.book_id',
        },
      },
    };
  }

  $beforeInsert() {
    this.created_at = this.updated_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

module.exports = function (app) {
  //const db = app.get('knexClient');
  // const tableName = 'book';
  // db.schema.hasTable(tableName).then(exists => {
  //   if(!exists) {
  //     db.schema.createTable(tableName, table => {
  //       table.increments('id');
  //       table.string('text');
  //     })
  //       .then(() => console.log(`Created ${tableName} table`))
  //       .catch(e => console.error(`Error creating ${tableName} table`, e));
  //   }
  // });


  //return db;
  return bookModel;
};
