import * as express from 'express';
import { Request, Response } from 'express';
import {
    createCollection,
    deleteCollection,
    selectCollectionByColumn,
    updateCollection,
} from '../models/CollectionModel';

const router = express.Router();

router.get('/collection', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await selectCollectionByColumn(
        request.body.columnValue,
        request.body.columnName
    );
    console.log(result);
    // Verification
    // Response
    response.send({ result });
});

router.post('/collection', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await createCollection(request.body);
    // Verification
    // Response
    response.send({ result });
});

router.put('/collection', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await updateCollection(request.body.collectionId, request.body.changes);
    // Verification
    // Response
    response.send({ result });
});

router.delete('/collection', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await deleteCollection(request.body.collectionId);
    // Verification
    // Response
    response.send({ result });
});

export default router;
