
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Jordan', password: '1234'},
        {id: 2, username: 'Gabe', password: '1234'},
        {id: 3, username: 'Bloomda', password: '1234'}
      ]);
    });
};
