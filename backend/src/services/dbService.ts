const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[environment];
const knex = require('knex')(config);

export function knexSelectAll(targetTable: string) {
  return knex
    .select()
    .from(targetTable)
    .then(function (result) {
      result = JSON.parse(JSON.stringify(result));
      return result;
    });
}

export function knexSelectByColumn(
  columnValue: string,
  columnName: string,
  targetTable: string
) {
  return knex
    .select()
    .from(targetTable)
    .where(columnName, columnValue)
    .then(function (result) {
      result = JSON.parse(JSON.stringify(result));
      return result;
    });
}

export function knexInsert(body, targetTable) {
  return knex(targetTable)
    .insert(body)
    .then(function (result) {
      return result;
    });
}

export function knexUpdateById(id, body, targetTable) {
  return knex(targetTable)
    .where('id', id)
    .update(body)
    .then(function (result) {
      return result;
    });
}

export function knexDeleteById(id, targetTable) {
  return knex(targetTable)
    .where('id', id)
    .del()
    .then(function (result) {
      return result;
    });
}
