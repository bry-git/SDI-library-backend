const { validate } = require('feathers-hooks-common');
const validateSchema = require('feathers-validate-joi');
const checkoutSchema = require ('./checkout.schema');

module.exports = {
  before: {
    all: [
    ],
    find: [
      // async context => {
      //   const query = context.service.createQuery(context.params);

      //   query
      //     .select('*')
      //     .innerJoin('user', 'checkout.user_id', 'user.user_id')
      //     .innerJoin('book', 'checkout.book_id', 'book.book_id');
      //   context.params.knex = query;
      //   return context;
      // }
      async (context) => {
        const query = {
          $select: ['*'],
          $eager: 'user',
          $sort: { created_at: -1 },
        };

        context.params.query = { ...context.params.query, ...query };
        return context;
      }
    ],
    get: [
      async (context) => {
        const query = {
          $select: ['*'],
          $eager: 'user',
          $sort: { created_at: -1 },
        };

        context.params.query = { ...context.params.query, ...query };
        return context;
      }
      // async context => {
      //   const query = context.service.createQuery(context.params);

      //   query
      //     .select('*')
      //     .where({checkout_id: context.id})
      //     .innerJoin('user', 'checkout.user_id', 'user.user_id')
      //     .innerJoin('book', 'checkout.book_id', 'book.book_id');
      //   context.params.knex = query;
      //   return context;
      // }
    ],
    create: [
      validateSchema.form(checkoutSchema.checkout, checkoutSchema.options)
      //TODO need to check if the book_id and user_id are valid
    ],
    update: [
      //TODO need to check if the book_id and user_id are valid
      validateSchema.form(checkoutSchema.checkout, checkoutSchema.options),
      async context => {
        context.data.updated_at = new Date();
        return context;
      }
    ],
    patch: [
      //TODO need to check if the book_id and user_id are valid
      validateSchema.form(checkoutSchema.checkout, checkoutSchema.options),
      async context => {
        context.data.updated_at = new Date();
        return context;
      }
    ],
    remove: []
  },
  after: {
    all: [

    ],
    find: [

    ],
    get: [

    ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
