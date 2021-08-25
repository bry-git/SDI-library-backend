const { Service } = require('feathers-knex');

exports.Book = class Book extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'book'
    });
  }
};
