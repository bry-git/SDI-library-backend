
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('book').del()
    .then(function () {
      // Inserts seed entries
      return knex('book').insert([
        { book_title: 'between two ferns', book_author: 'zack gil', book_ISBN: '99-1-34532-65',},
        { book_title: 'angels and demons', book_author: 'tom hanks', book_ISBN: '952-1-5452-65',},
        { book_title: 'the Davinci code', book_author: 'chet hanks', book_ISBN: '12-1-34632-65',},
        { book_title: 'the numa files', book_author: 'clive cussler', book_ISBN: '43-3-13432-46',},
        { book_title: 'the guest list', book_author: 'lucy foley', book_ISBN: '33-345644-65',},
        { book_title: 'keys to the kingdom', book_author: 'deviant ollam', book_ISBN: '43-34564-543',},
        { book_title: 'the key blank directory', book_author: 'kaba group', book_ISBN: '65-34556-654',},
        { book_title: 'electronics for dummies', book_author: 'doug lowe', book_ISBN: '54-34534-564',},
        { book_title: 'UMTS applied theory', book_author: 'PGS', book_ISBN: '43-54343-454',},
      ]);
    });
};
