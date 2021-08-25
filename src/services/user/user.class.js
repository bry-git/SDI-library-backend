const { Service } = require('feathers-knex');

exports.User = class User extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'user'
    });
  }
};
