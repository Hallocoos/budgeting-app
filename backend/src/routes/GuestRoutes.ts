import * as express from 'express';
import { Request, Response } from 'express';
import {
    selectUserByColumn
} from '../models/UserModel';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

const router = express.Router();

router.post('/login', async (request: Request, response: Response) => {
    // Validation
    // Action
    const result = await selectUserByColumn(request.body.email, "email");
    // Verification
    if (result[0] && await bcrypt.compare(request.body.password, result[0].password)) {
        // Response
        response.send({ token: await jwt.sign(JSON.stringify(result), process.env.SECRETKEY) });
    } else
        response.send({ error: "Email or Password is incorrect." });
});

router.post('/register', async (request: Request, response: Response) => {
    // Validation
    // Action
    // Verification
    // Response
    response.redirect(307, '/user');
});

export default router;