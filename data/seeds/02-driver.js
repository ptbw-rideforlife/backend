
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('driver').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('driver').insert([
        {
          id: 1, 
          firstname: 'Lee', 
          lastname: 'Tann',
          city: 'Kampala',
          phone: '7774442222',
          password: 'password123'
        }
      ]);
    });
};
