import * as express from 'express';
import { Request, Response } from 'express';
import { createUser } from '../models/UserModel';

const router = express.Router();

router.post('/createUser', async (request: Request, response: Response) => {
  // Validation
  // Action
  const result = await createUser(request.body.username, request.body.password);
  console.log('result: ', result);
  // Verification
  // Response
  response.send({ result });
});

router.get('/updateUser', async (request: Request, response: Response) => {
  // Validation
  // Action
  // Verification
  // Response
  response.send({});
});

router.get('/deleteUser', async (request: Request, response: Response) => {
  // Validation
  // Action
  // Verification
  // Response
  response.send({});
});

export default router;
