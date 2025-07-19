import jwt from 'jsonwebtoken';
import {
    ValidationError,
    ServerError,
    ApplicationError,
    AuthenticationError
} from './ErrorClasses.js';

function errorHandler(err, req, res, _next) {
    console.log(err);

    if (err instanceof ValidationError) res.status(err.status).json(err);
    else if (err instanceof ApplicationError) res.status(err.status).json(err);
    else if (err instanceof AuthenticationError)
        res.status(err.status).json(err);
    else if (
        err instanceof jwt.TokenExpiredError ||
        err instanceof jwt.JsonWebTokenError
    ) {
        const authenticationError = new AuthenticationError('invalid token');
        res.status(authenticationError.status).json(authenticationError);
    } else {
        const serverError = new ServerError();
        res.status(500).json(serverError);
    }
}

export default errorHandler;
