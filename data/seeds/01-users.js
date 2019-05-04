
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
          address: '1234 secure street, Kampala',
          phoneNumber: 222444222,
          password: 'password123'         
        },
        {
          id: 2, 
          firstName: 'Sarah', 
          lastName: 'Tsang',
          address: '4321 secure street, Kira',
          phoneNumber: 555444999,
          password: 'password123'         
        },
      ]);
    });
};
