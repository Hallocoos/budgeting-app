import { Connect, Query } from '../mysql';

const createDatabase = async () => {
  let connection = await Connect();
  Query(connection, 'DROP DATABASE budget;');
  connection = await Connect();
  Query(connection, 'CREATE DATABASE budget;');
  // Create Table User
  Query(
    connection,
    'CREATE TABLE user(' +
      'id INT NOT NULL AUTO_INCREMENT,' +
      'username VARCHAR(100) NOT NULL,' +
      'password VARCHAR(40) NOT NULL,' +
      'PRIMARY KEY (id)' +
      ');'
  );
  // Create Table Account
  Query(
    connection,
    'CREATE TABLE account(' +
      'id INT NOT NULL AUTO_INCREMENT,' +
      'name VARCHAR(100) NOT NULL,' +
      'PRIMARY KEY (id)' +
      ');'
  );
  // Create Table Category
  Query(
    connection,
    'CREATE TABLE category(' +
      'id INT NOT NULL AUTO_INCREMENT,' +
      'user_id INT,' +
      'PRIMARY KEY (id),' +
      'CONSTRAINT FK_UserCategory FOREIGN KEY (user_id) REFERENCES user(id)' +
      ');'
  );
  // Create Table Transaction
  Query(
    connection,
    'CREATE TABLE transaction(' +
      'id INT NOT NULL AUTO_INCREMENT,' +
      'user_id INT,' +
      'account_id INT,' +
      'total DECIMAL(13,2),' +
      'date DATETIME DEFAULT NOW(),' +
      'PRIMARY KEY (id),' +
      'CONSTRAINT FK_UserTransaction FOREIGN KEY (user_id) REFERENCES user(id),' +
      'CONSTRAINT FK_UserAccount FOREIGN KEY (account_id) REFERENCES account(id)' +
      ');'
  );
  // Create Table Subtransaction
  Query(
    connection,
    'CREATE TABLE subtransaction(' +
      'id INT NOT NULL AUTO_INCREMENT,' +
      'transaction_id INT,' +
      'category_id INT,' +
      'amount DECIMAL(13,2),' +
      'PRIMARY KEY (id),' +
      'CONSTRAINT FK_SubTransaction FOREIGN KEY (transaction_id) REFERENCES transaction(id),' +
      'CONSTRAINT FK_CategoryTransaction FOREIGN KEY (category_id) REFERENCES category(id)' +
      ');'
  );
  Query(
    connection,
    'INSERT INTO user (`username`, `password`) VALUES ("hallocoos", "12345678");'
  );
  Query(connection, 'INSERT INTO account (`name`) VALUES ("savings");');
  Query(connection, 'INSERT INTO category (`user_id`) VALUES (1);');
  Query(
    connection,
    'INSERT INTO transaction (`user_id`, `total`, `account_id`) VALUES (1, 100, 1);'
  );
  Query(
    connection,
    'INSERT INTO subtransaction (`category_id`, `amount`, `transaction_id`) VALUES (1, 100, 1);'
  );
};

createDatabase();
