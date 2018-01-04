
exports.up = (knex, Promise) => knex.schema.createTable('products', t => {
  t.uuid('id').primary();
  t.string('name').notNullable();
  t.json('color').notNullable();
  t.timestamp('created_at', true).notNullable().defaultsTo(knex.fn.now());
  t.timestamp('updated_at', true).notNullable().defaultsTo(knex.fn.now());
});

exports.down = (knex, Promise) => knex.schema.dropTable('products');
