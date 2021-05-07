import * as express from 'express';
import { Request, Response } from 'express';
import { Connect, Query } from '../config/databaseConnection';

const router = express.Router();

router.get('/test', async (request: Request, response: Response) => {
  const connection = await Connect();
  const user = await Query(connection, 'SELECT * FROM user;');
  const account = await Query(connection, 'SELECT * FROM account;');
  const category = await Query(connection, 'SELECT * FROM category;');
  const transaction = await Query(connection, 'SELECT * FROM transaction;');
  const subtransaction = await Query(
    connection,
    'SELECT * FROM subtransaction;'
  );
  response.send({ user, account, category, transaction, subtransaction });
});

router.post('/test', async (request: Request, response: Response) => {
  const connection = await Connect();
  const user = await Query(connection, 'SELECT * FROM user;');
  const account = await Query(connection, 'SELECT * FROM account;');
  const category = await Query(connection, 'SELECT * FROM category;');
  const transaction = await Query(connection, 'SELECT * FROM transaction;');
  const subtransaction = await Query(
    connection,
    'SELECT * FROM subtransaction;'
  );
  response.send({ user, account, category, transaction, subtransaction });
});

export default router;
