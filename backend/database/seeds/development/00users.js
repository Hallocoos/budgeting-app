const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');
const saltRounds = 3;

adminName = process.env.ADMINNAME || 'admin';
adminPassword = process.env.ADMINPASSWORD || 'admin';

async function hash(password) {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

exports.seed = function (knex, Promise) {
  return knex('user')
    .del()
    .then(async function () {
      return knex('user').insert({
        username: 'Hallocoos',
        password: await hash('12345678'),
      });
    });
};
