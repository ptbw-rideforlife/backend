
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          firstName: 'Rebecca', 
          lastName: 'Ramos',
          city: 'Kampala',
          phoneNumber: '8884442345',
          password: 'password123'         
        },
        {
          id: 2, 
          firstName: 'Sarah', 
          lastName: 'Tsang',
          city: 'Kira',
          phoneNumber: '8884449999',
          password: 'password123'         
        },
      ]);
    });
};
