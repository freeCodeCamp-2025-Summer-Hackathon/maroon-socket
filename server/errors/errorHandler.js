import { ValidationError, ServerError, ApplicationError } from './ErrorClasses.js';

function errorHandler(err, req, res, _next) {
    console.log(err);

    if (err instanceof ValidationError) res.status(err.status).json(err);
    else if (err instanceof ApplicationError) res.status(err.status).json(err);
    else {
        const err = new ServerError();
        res.status(500).json(err);
    }
}

export default errorHandler;
