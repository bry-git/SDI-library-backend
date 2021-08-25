const { Service } = require('feathers-knex');

exports.Checkout = class Checkout extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'checkout'
    });
  }
};
