/* eslint-disable no-console */
const { Model } = require('objection');

class checkoutModel extends Model {
  static get tableName() {
    return 'checkout';
  }

  static get idColumn() {
    return 'checkout_id';
  }


  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_id', 'book_id', 'checkout_returned', 'checkout_due_date'],

      properties: {
        user_id: { type: 'integer' },
        book_id: { type: 'integer' },
        checkout_returned: { type: 'boolean' },
        checkout_due_date: { type: 'string'}
      },
    };
  }

  static get relationMappings() {
    const User = require('./user.model');

    return {
      user: {
        relation: Model.HasOneRelation,
        modelClass: User,
        join: {
          from: 'checkout.user_id',
          to: 'user.user_id',
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
  // const tableName = 'checkout';
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


  return checkoutModel;
};
