
exports.up = function(knex, Promise) {
    return knex.schema.createTable('reviews', tbl => {
        tbl.increments()
        tbl.integer('userID')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('driverID')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('driver')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.text('review')
            .notNullable()
        tbl.timestamp('created_at')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('reviews')
};
