
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {
          id: 1,
          userID: 1,
          driverID: 1,
          review: "He'a a cool dude."
        },
        {
          id: 2,
          userID: 2,
          driverID: 1,
          review: "He'a a fast driver."
        },
        {
          id: 3,
          userID: 1,
          driverID: 2,
          review: "safest driver ever."
        },
        {
          id: 4,
          userID: 1,
          driverID: 3,
          review: "best driver ever"
        },
        {
          id: 5,
          userID: 2,
          driverID: 2,
          review: "Got me there on time."
        },
      ]);
    });
};
