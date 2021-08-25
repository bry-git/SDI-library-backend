
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('book').del()
    .then(function () {
      // Inserts seed entries
      return knex('book').insert([
        { book_title: 'between two ferns', book_author: 'zack gil', book_ISBN: '123rjkl563',},
        { book_title: 'angels and demons', book_author: 'tom hanks', book_ISBN: '123rjkl5fd43',},
        { book_title: 'the Davinci code', book_author: 'chet hanks', book_ISBN: '123gdhfl563',},
        { book_title: 'the numa files', book_author: 'clive cussler', book_ISBN: '553rjkl7873',},
        { book_title: 'the guest list', book_author: 'lucy foley', book_ISBN: '454jkl563',},
        { book_title: 'keys to the kingdom', book_author: 'deviant ollam', book_ISBN: '1543rjkl563',},
        { book_title: 'the key blank directory', book_author: 'kaba group', book_ISBN: '698rjkl563',},
        { book_title: 'electronics for dummies', book_author: 'doug lowe', book_ISBN: '678rjkl563',},
        { book_title: 'UMTS applied theory', book_author: 'PGS', book_ISBN: '890rjkl563',},
      ]);
    });
};
