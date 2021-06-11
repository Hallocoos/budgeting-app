import * as express from 'express';
import { Request, Response } from 'express';
import {
    selectUserByColumn
} from '../models/UserModel';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

const router = express.Router();

router.get('/login', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await selectUserByColumn(request.body.email, "email");
    console.log("result: ", result);
    // Verification
    if (result[0] && await bcrypt.compare(request.body.password, result[0].password)) {
        // Verification
        response.send({ token: await jwt.sign(JSON.stringify(result), process.env.SECRETKEY) });
    } else
        response.send("Error");
});

export default router;