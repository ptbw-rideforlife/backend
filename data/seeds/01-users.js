
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          firstname: 'Rebecca', 
          lastname: 'Tsang',
          city: 'Kampala',
          phone: '8884442222',
          password: 'password123'         
        },
      ]);
    });
};
