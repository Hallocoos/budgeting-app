const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');
const saltRounds = 3;

adminName = process.env.ADMINNAME || 'admin';
adminPassword = process.env.ADMINPASSWORD || 'admin';

async function hash(pssword) {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(pssword, salt);
  return hash;
}

exports.seed = function (knex, Promise) {
  return knex('subtransaction')
    .del()
    .then(async function () {
      return knex('subtransaction').insert({
        amount: 1,
        categoryId: 1,
        transactionId: 1,
      });
    });
};
