import * as express from 'express';
import { Request, Response } from 'express';
import {
  createUser,
  deleteUser,
  selectUserByColumn,
  updateUser,
} from '../models/UserModel';

const router = express.Router();

router.post(
  '/selectUserByColumn',
  async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await selectUserByColumn(
      request.body.columnValue,
      request.body.columnName
    );
    // Verification
    // Response
    response.send({ result });
  }
);

router.post('/createUser', async (request: Request, response: Response) => {
  // Validation
  // Action
  const result = await createUser(request.body.username, request.body.password);
  // Verification
  // Response
  response.send({ result });
});

router.post('/updateUser', async (request: Request, response: Response) => {
  // Validation
  // Action
  const result = await updateUser(request.body.userId, request.body.changes);
  // Verification
  // Response
  response.send({ result });
});

router.post('/deleteUser', async (request: Request, response: Response) => {
  // Validation
  // Action
  const result = await deleteUser(request.body.userId);
  // Verification
  // Response
  response.send({ result });
});

export default router;
