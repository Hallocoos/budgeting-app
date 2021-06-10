exports.up = async function (knex, Promise) {
  return knex.schema
    .createTable('user', function (table) {
      table.increments('id').primary();
      table.string('username').notNullable();
      table.string('password').notNullable();
    })
    .createTable('account', function (table) {
      table.increments('id').primary();
      table.integer('userId').unsigned().references('id').inTable('user');
      table.string('name').notNullable();
    })
    .createTable('collection', function (table) {
      table.increments('id').primary();
      table.integer('userId').unsigned().references('id').inTable('user');
      table.string('name').notNullable();
    })
    .createTable('category', function (table) {
      table.increments('id').primary();
      table.integer('userId').unsigned().references('id').inTable('user');
      table.string('name').notNullable();
      table
        .integer('collectionId')
        .unsigned()
        .references('id')
        .inTable('collection');
    })
    .createTable('transaction', function (table) {
      table.increments('id').primary();
      table.integer('accountId').unsigned().references('id').inTable('account');
      table.integer('userId').unsigned().references('id').inTable('user');
      table.integer('amountTotal').notNullable();
      table.timestamp('date').defaultTo(knex.fn.now());
      table
        .integer('collectionId')
        .unsigned()
        .references('id')
        .inTable('collection');
    })
    .createTable('subtransaction', function (table) {
      table.increments('id').primary();
      table.double('amount').notNullable();
      table
        .integer('categoryId')
        .unsigned()
        .references('id')
        .inTable('category');
      table
        .integer('transactionId')
        .unsigned()
        .references('id')
        .inTable('transaction');
    })
    .createTable('subcategory', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table
        .integer('categoryId')
        .unsigned()
        .references('id')
        .inTable('category');
    });
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('subtransaction')
    .dropTable('transaction')
    .dropTable('category')
    .dropTable('collection')
    .dropTable('account')
    .dropTable('user')
    .then();
};
