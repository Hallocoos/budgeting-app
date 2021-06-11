// import * as express from 'express';
// import { Request, Response } from 'express';
// import {
//     createSubcategory,
//     deleteSubcategory,
//     selectSubcategoryByColumn,
//     updateSubcategory,
// } from '../models/SubcategoryModel';

// const router = express.Router();

// router.get('/subcategory', async (request: Request, response: Response) => {
//     // Validation
//     // Action
//     const result = await selectSubcategoryByColumn(
//         request.body.columnValue,
//         request.body.columnName
//     );
//     // Verification
//     // Response
//     response.send({ result });
// });

// router.post('/subcategory', async (request: Request, response: Response) => {
//     // Validation
//     // Action
//     const result = await createSubcategory(request.body);
//     // Verification
//     // Response
//     response.send({ result });
// });

// router.put('/subcategory', async (request: Request, response: Response) => {
//     // Validation
//     // Action
//     const result = await updateSubcategory(request.body.subcategoryId, request.body.changes);
//     // Verification
//     // Response
//     response.send({ result });
// });

// router.delete('/subcategory', async (request: Request, response: Response) => {
//     // Validation
//     // Action
//     const result = await deleteSubcategory(request.body.subcategoryId);
//     // Verification
//     // Response
//     response.send({ result });
// });

// export default router;
