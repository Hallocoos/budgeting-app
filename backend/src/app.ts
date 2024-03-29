import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import express, { request, response } from 'express';
import { Request, Response } from 'express';
import { info, error } from './services/logging';
import user from './routes/UserRoutes';
import transaction from './routes/TransactionRoutes';
import category from './routes/CategoryRoutes';
import subtransaction from './routes/SubtransactionRountes';
// import subcategory from './routes/SubcategoryRoutes';
import collection from './routes/CollectionRoutes';
import guest from './routes/GuestRoutes';
import { verifyToken, generateToken } from './services/jwt';
import cors from 'cors';

const app = express();
dotenv.config();
module.exports = app;

app.set('view engine', 'html');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}));

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

app.use('/', guest, /* verifyToken(request, response, 'j'), */user, transaction, category, subtransaction /*, subcategory*/, collection);

app.all('*', (request, response) => {
  response.sendStatus(404);
});

const start = async () => {
  const port = process.env.PORT || 3000;
  try {
    app.listen(port, () => {
      info(`APP.JS`, `Server is listening on port ${port} - localhost:${port}/`);
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
