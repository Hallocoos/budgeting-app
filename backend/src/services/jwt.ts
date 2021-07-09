import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken';
import { nextTick } from 'process';

export function verifyToken() {
    return async function (request: Request, response: Response, next, token) {
        return await jwt.verify(token, process.env.JWTKEY as string, (err: any, user: any) => {
            console.log(err);
            if (err) {
                console.log(err);
                response.sendStatus(403);
            } else {
                next();
            }
        });
    };
};

export async function generateToken(identifier) {
    return await jwt.sign({ username: JSON.stringify(identifier) }, process.env.JWTKEY, { expiresIn: 86400000 });
};

