exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('user', function (table) {
      table.increments('id').primary()
      table.string('username').notNullable()
      table.string('password').notNullable()
    })
    .createTable('account', function (table) {
      table.increments('id').primary()
      
      // 'id INT NOT NULL AUTO_INCREMENT,' +
      // 'name VARCHAR(100) NOT NULL,' +
      // 'PRIMARY KEY (id)' +
    })
    .createTable('category', function (table) {
      table.increments('id').primary()
      
      // 'user_id INT,' +
      // 'PRIMARY KEY (id),' +
      // 'CONSTRAINT FK_UserCategory FOREIGN KEY (user_id) REFERENCES user(id)' +
    })
    .createTable('subcategory', function (table) {
      table.increments('id').primary()
    })
    .createTable('transaction', function (table) {
      table.increments('id').primary()
      
      // 'user_id INT,' +
      // 'account_id INT,' +
      // 'total DECIMAL(13,2),' +
      // 'date DATETIME DEFAULT NOW(),' +
      // 'PRIMARY KEY (id),' +
      // 'CONSTRAINT FK_UserTransaction FOREIGN KEY (user_id) REFERENCES user(id),' +
      // 'CONSTRAINT FK_UserAccount FOREIGN KEY (account_id) REFERENCES account(id)' +
    })
    .createTable('subtransaction', function (table) {
      table.increments('id').primary()
      
      // 'transaction_id INT,' +
      // 'category_id INT,' +
      // 'amount DECIMAL(13,2),' +
      // 'PRIMARY KEY (id),' +
      // 'CONSTRAINT FK_SubTransaction FOREIGN KEY (transaction_id) REFERENCES transaction(id),' +
      // 'CONSTRAINT FK_CategoryTransaction FOREIGN KEY (category_id) REFERENCES category(id)' +
    })
};

exports.down = function (knex, Promise) {
  return knex.schema
  .dropTable('account')
  .dropTable('transaction')
  .dropTable('subtransaction')
  .dropTable('category')
  .dropTable('subcategory')
  .dropTable('users').then();
};
