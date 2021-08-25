
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {user_name: 'bryson', user_email: 'admin@localhost.com',},
        {user_name: 'evan', user_email: 'admin@localhost.com',},
        {user_name: 'oozamataz buckshank', user_email: 'admin@localhost.com',},
        {user_name: 'beezer twelve washingbeard', user_email: 'admin@localhost.com',},
        {user_name: 'fudge', user_email: 'admin@localhost.com',}
      ]);
    });
};
