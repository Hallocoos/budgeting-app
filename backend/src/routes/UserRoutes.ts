import * as express from 'express';
import { Request, Response } from 'express';
import {
  createUser,
  deleteUser,
  selectUserByColumn,
  updateUser,
} from '../models/UserModel';

const router = express.Router();

router.get('/user', async (request: Request, response: Response) => {
  // Validation
  // Action
  const result = await selectUserByColumn(
    request.body.columnValue,
    request.body.columnName
  );
  // Verification
  // Response
  response.send({ result });
});

router.post('/user', async (request: Request, response: Response) => {
  // Validation
  // Action
  const result = await createUser(request.body);
  // Verification
  // Response
  response.send({ result });
});

router.put('/user', async (request: Request, response: Response) => {
  // Validation
  // Action
  const result = await updateUser(request.body.userId, request.body.changes);
  // Verification
  // Response
  response.send({ result });
});

router.delete('/user', async (request: Request, response: Response) => {
  // Validation
  // Action
  const result = await deleteUser(request.body.userId);
  // Verification
  // Response
  response.send({ result });
});

export default router;
