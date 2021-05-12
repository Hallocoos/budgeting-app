import {
  knexSelectByColumn,
  knexInsert,
  knexSelectAll,
  knexUpdateById,
  knexDeleteById,
} from '../services/dbService';

class User {
  id: string;
  username: number;
  password: string;

  constructor(data: Partial<User>) {
    Object.assign(this, data);
  }
}

export async function selectUserByColumn(
  columnValue,
  columnName
): Promise<User> {
  return await knexSelectByColumn(columnValue, columnName, 'user');
}

export async function createUser(username, password): Promise<User> {
  return await knexInsert({ username, password }, 'user');
}

export async function updateUser(userId, changes): Promise<User> {
  return await knexUpdateById(userId, changes, 'user');
}

export async function deleteUser(userId): Promise<User> {
  return await knexDeleteById(userId, 'user');
}
