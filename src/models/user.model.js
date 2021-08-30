/* eslint-disable no-console */

// user-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
const { Model } = require('objection');

class userModel extends Model {
  static get tableName() {
    return 'user';
  }

  static get idColumn() {
    return 'user_id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_name', 'user_email'],

      properties: {
        user_name: { type: 'string' },
        book_email: { type: 'string' },
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
  // const tableName = 'user';
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


  return userModel;
};
