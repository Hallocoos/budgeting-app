import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import express from 'express';
import { Request, Response } from 'express';
import test from './routes/Test';
import user from './routes/UserRoutes';
import { info, error } from './services/logging';

const app = express();
dotenv.config();
module.exports = app;

app.set('view engine', 'html');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

function loggerMiddleware(
  request: Request,
  response: Response,
  next: any
): void {
  if (request.method !== 'HEAD') {
    const date = new Date().toISOString();
    info(`APP.JS`, `${request.method} ${request.path} ${JSON.stringify(request.body)}`);
  }
  next();
}
app.use(loggerMiddleware);

app.use('/', test, user);

app.all('*', (request, response) => {
  response.sendStatus(404);
});

const start = async () => {
  const port = process.env.PORT || 3000;
  try {
    app.listen(port, () => {
      info(`APP.JS`, `Server is listening on port ${port}`);
    });
  } catch (err) {
    error(`APP.JS`, err);
    process.exit(1);
  }
};

if (!module.parent) {
  start().catch((err) => {
    error(`APP.JS`, err);
    process.exit(1);
  });
}
