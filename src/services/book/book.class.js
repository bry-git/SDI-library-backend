//const { Service } = require('feathers-knex');
const { Service } = require('feathers-objection');

exports.Book = class Book extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;
    super({
      ...otherOptions,
      model: Model,

    });
  }

};
