import * as express from 'express';
import { Request, Response } from 'express';
import {
    createTransaction,
    deleteTransaction,
    selectTransactionByColumn,
    updateTransaction,
} from '../models/TransactionModel';

const router = express.Router();

router.get('/transaction', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await selectTransactionByColumn(
        request.body.columnValue,
        request.body.columnName
    );
    // Verification
    // Response
    response.send({ result });
});

router.post('/transaction', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await createTransaction(request.body);
    // Verification
    // Response
    response.send({ result });
});

router.put('/transaction', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await updateTransaction(request.body.transactionId, request.body.changes);
    // Verification
    // Response
    response.send({ result });
});

router.delete('/transaction', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await deleteTransaction(request.body.transactionId);
    // Verification
    // Response
    response.send({ result });
});

export default router;
