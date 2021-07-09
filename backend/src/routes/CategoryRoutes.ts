import * as express from 'express';
import { Request, Response } from 'express';
import {
    createCategory,
    deleteCategory,
    selectCategoryByColumn,
    updateCategory,
} from '../models/CategoryModel';

const router = express.Router();

router.get('/category', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await selectCategoryByColumn(
        request.body.columnValue,
        request.body.columnName
    );
    console.log(result);
    // Verification
    // Response
    response.send({ result });
});

router.post('/category', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await createCategory(request.body);
    // Verification
    // Response
    response.send({ result });
});

router.put('/category', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await updateCategory(request.body.categoryId, request.body.changes);
    // Verification
    // Response
    response.send({ result });
});

router.delete('/category', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await deleteCategory(request.body.categoryId);
    // Verification
    // Response
    response.send({ result });
});

export default router;
