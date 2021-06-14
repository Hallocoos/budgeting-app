import {
  knexSelectByColumn,
  knexInsert,
  knexUpdateById,
  knexDeleteById,
} from '../services/dbService';
import { hash } from '../services/passwordHashing';

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

export async function createUser(userData): Promise<User> {
  userData.password = await hash(userData.password);
  return await knexInsert({ ...userData }, 'user');
}

export async function updateUser(userId, changes): Promise<User> {
  return await knexUpdateById(userId, changes, 'user');
}

export async function deleteUser(userId): Promise<User> {
  return await knexDeleteById(userId, 'user');
}
