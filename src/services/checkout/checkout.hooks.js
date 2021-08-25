

module.exports = {
  before: {
    all: [
    ],
    find: [
      async context => {
        const query = context.service.createQuery(context.params);
  
        // do something with query here        
        query
          .select('*')
          .innerJoin('user', 'checkout.user_id', 'user.user_id')
          .innerJoin('book', 'checkout.book_id', 'book.book_id');
        context.params.knex = query;
        return context;
      }
    ],
    get: [
      async context => {
        const query = context.service.createQuery(context.params);
  
        // do something with query here
        query
          .select('*')
          .where({checkout_id: context.id})
          .innerJoin('user', 'checkout.user_id', 'user.user_id')
          .innerJoin('book', 'checkout.book_id', 'book.book_id');
        context.params.knex = query;
        return context;
      }
    ],
    create: [],
    update: [],
    patch: [],
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
