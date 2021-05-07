import { Request, Response } from 'express';
import { Connect, Query } from '../config/databaseConnection';
import {
  knexSelectByColumn,
  knexInsert,
  knexSelectAll,
  knexUpdateById,
} from '../services/dbService';

class User {
  id: string;
  username: number;
  password: string;

  constructor(data: Partial<User>) {
    Object.assign(this, data);
  }
}

export async function createUser(username, password): Promise<User> {
  return await knexInsert({ username, password }, 'user');
}
