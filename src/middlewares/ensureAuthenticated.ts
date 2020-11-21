import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import auth from "../config/auth";

interface TokenPayload {
    iat: number;
    ext: number;
    subject: string;
}

export default function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error("JWT token não existe.");
    }

    const [, token] = authHeader.split(" ");

    const authSecret = auth.jwt.secret

    try {
        const decoded = verify(token, authSecret);

        const { subject } = decoded as TokenPayload;

        request.user = {
            id: subject,
        };

        return next();
    } catch (err) {
        throw new Error("JWT token inválido");
    }
}