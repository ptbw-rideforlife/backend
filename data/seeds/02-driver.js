
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('driver').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('driver').insert([
        {
          id: 1, 
          firstName: 'Lee', 
          lastName: 'Tann',
          phoneNumber: '7774442222',
          bio: 'I give rides to preggo moms',
          rides: 0,
          rating: 5,
          price: 20000,
          city: 'Kampala',
          password: 'password123'
        },
        {
          id: 2, 
          firstName: 'Leeroy', 
          lastName: 'Tanner',
          phoneNumber: '7774441111',
          bio: 'I give rides to preggo moms',
          rides: 4,
          rating: 5,
          price: 20000,
          city: 'Nansana',
          password: 'password123'
        },
        {
          id: 3, 
          firstName: 'Leo', 
          lastName: 'Tango',
          phoneNumber: '7774440000',
          bio: 'I give rides to preggo moms',
          rides: 2,
          rating: 5,
          price: 20000,
          city: 'Kira',
          password: 'password123'
        },
        {
          id: 4, 
          firstName: 'Lisa', 
          lastName: 'Jones',
          phoneNumber: '5554440000',
          bio: 'I give rides to preggo moms',
          rides: 2,
          rating: 4,
          price: 20000,
          city: 'Kampala',
          password: 'password123'
        },
        {
          id: 5, 
          firstName: 'Laura', 
          lastName: 'Jones',
          phoneNumber: '1114440000',
          bio: 'I give rides to preggo moms',
          rides: 1,
          rating: 5,
          price: 20000,
          city: 'Kampala',
          password: 'password123'
        },
      ]);
    });
};
