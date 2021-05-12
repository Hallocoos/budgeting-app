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
  return knex('category')
    .del()
    .then(async function () {
      return knex('category').insert({
        userId: 1,
        name: 'dinner',
        collectionId: 1,
      });
    });
};
