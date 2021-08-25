const { Service } = require('feathers-knex');

exports.Checkout = class Checkout extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'checkout'
    });
  }

  async find(params){
    const { Model } = this.options;
    const q = Model.from('checkout')
      .select('*')
      .innerJoin('user', 'checkout.user_id', 'user.user_id')
      .innerJoin('book', 'checkout.book_id', 'book.book_id');
    const res = await q;
    return res;
  }

  async get(id, params) {
    const { Model } = this.options;
    const q = Model.from('checkout')
      .select('*')
      .where({checkout_id: id})
      .innerJoin('user', 'checkout.user_id', 'user.user_id')
      .innerJoin('book', 'checkout.book_id', 'book.book_id');
    const res = await q;
    return res;
  }
};
