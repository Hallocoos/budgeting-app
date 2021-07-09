import * as express from 'express';
import { Request, Response } from 'express';
import {
    createSubtransaction,
    deleteSubtransaction,
    selectSubtransactionByColumn,
    updateSubtransaction,
} from '../models/SubtransactionModel';

const router = express.Router();

router.get('/subtransaction', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await selectSubtransactionByColumn(
        request.body.columnValue,
        request.body.columnName
    );
    console.log(result);
    // Verification
    // Response
    response.send({ result });
});

router.post('/subtransaction', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await createSubtransaction(request.body);
    // Verification
    // Response
    response.send({ result });
});

router.put('/subtransaction', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await updateSubtransaction(request.body.subtransactionId, request.body.changes);
    // Verification
    // Response
    response.send({ result });
});

router.delete('/subtransaction', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await deleteSubtransaction(request.body.subtransactionId);
    // Verification
    // Response
    response.send({ result });
});

export default router;
