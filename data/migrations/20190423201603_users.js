
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments()
        tbl.string('firstName', 255).notNullable()
        tbl.string('lastName', 255).notNullable()
        tbl.string('address', 125).notNullable()
        tbl.integer('phoneNumber', 9).notNullable().unique()
        tbl.string('password', 128).notNullable()
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
