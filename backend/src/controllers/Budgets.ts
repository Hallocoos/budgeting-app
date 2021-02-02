import * as express from 'express';
import { Request, Response } from 'express';
import http from 'http';
import https from 'https';
import HttpHeaders from 'http';

const router = express.Router();

router.post('/budgets', async (request: Request, response: Response) => {
  let headers = '';
  response.send(https.get('https://api.youneedabudget.com/v1/budgets', {headers: }));
});

export default router;
