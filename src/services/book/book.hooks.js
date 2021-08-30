const validateSchema = require('feathers-validate-joi');
const bookSchema = require ('./book.schema');

module.exports = {
  before: {
    all: [],
    find: [
      async (context) => {
        const query = {
          $select: ['*'],
          $eager: 'checkout',
          $sort: { created_at: -1 },
        };

        context.params.query = { ...context.params.query, ...query };
        return context;
      },
    ],
    get: [
      async (context) => {
        const query = {
          $select: ['*'],
          $eager: 'checkout',
          $sort: { created_at: -1 },
        };

        context.params.query = { ...context.params.query, ...query };
        return context;
      },
    ],
    create: [ validateSchema.form(bookSchema.book, bookSchema.options) ],
    update: [
      validateSchema.form(bookSchema.book, bookSchema.options),
      async context => {
        context.data.updated_at = new Date();
        return context;
      } ],
    patch: [
      validateSchema.form(bookSchema.book, bookSchema.options),
      async context => {
        context.data.updated_at = new Date();
        return context;
      }
    ],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
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
