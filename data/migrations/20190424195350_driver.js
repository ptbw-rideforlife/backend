exports.up = function(knex, Promise) {
    return knex.schema.createTable('driver', tbl => {
        tbl.increments()
        tbl.string('firstname', 255).notNullable()
        tbl.string('lastname', 255).notNullable()
        tbl.string('city', 125).notNullable()
        tbl.integer('phone', 9).notNullable().unique()
        tbl.string('password', 128).notNullable()
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('driver')
};