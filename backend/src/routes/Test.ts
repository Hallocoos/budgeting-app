import * as express from 'express';
import { Request, Response } from 'express';

const router = express.Router();

router.get('/test', async (request: Request, response: Response) => {
  response.send("response");
});

router.post('/test', async (request: Request, response: Response) => {
  response.send("response");
});

export default router;
