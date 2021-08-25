
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('checkout').del()
    .then(function () {
      // Inserts seed entries
      return knex('checkout').insert([
        {user_id: 1, book_id: 1, checkout_returned: false, checkout_due_date: '11/23/2021'},
        {user_id: 2, book_id: 2, checkout_returned: false, checkout_due_date: '12/23/2021'},
        {user_id: 2, book_id: 3, checkout_returned: false, checkout_due_date: '1/23/2022'},
        {user_id: 1, book_id: 9, checkout_returned: false, checkout_due_date: '08/29/2021'},
        {user_id: 1, book_id: 8, checkout_returned: false, checkout_due_date: '08/26/2021'},
        {user_id: 4, book_id: 4, checkout_returned: false, checkout_due_date: '11/23/2021'},
        {user_id: 4, book_id: 5, checkout_returned: true, checkout_due_date: '08/21/2021'},
        {user_id: 5, book_id: 6, checkout_returned: true, checkout_due_date: '08/21/2021'},
        {user_id: 1, book_id: 5, checkout_returned: false, checkout_due_date: '08/29/2021'},
        {user_id: 2, book_id: 6, checkout_returned: false, checkout_due_date: '08/29/2021'},
      ]);
    });
};
