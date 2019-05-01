exports.up = function(knex, Promise) {
    return knex.schema.createTable('driver', tbl => {
        tbl.increments()
        tbl.string('firstName', 225).notNullable()
        tbl.string('lastName', 225).notNullable()
        tbl.integer('phoneNumber', 9).notNullable().unique()
        tbl.text('bio')
        tbl.integer('rides', 10)
        tbl.integer('rating', 5)
        tbl.integer('price', 125).notNullable()
        tbl.string('city', 125).notNullable()
        tbl.string('password', 128).notNullable()            
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('driver')
};