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
  return knex('transaction')
    .del()
    .then(async function () {
      return knex('transaction').insert({
        userId: 1,
        accountId: 1,
        amountTotal: 1,
        collectionId: 1,
      });
    });
};
