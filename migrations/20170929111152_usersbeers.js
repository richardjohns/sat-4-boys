
exports.up = function(knex, Promise) {
  return knex.schema.createTable('usersbeers', function (table) {
    table.increments('usersbeers_id').primary()
    table.string('user_id').references()
    table.string('beer_id').references()
 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('usersbeers')
  
};
