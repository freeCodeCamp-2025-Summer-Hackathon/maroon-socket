import { ValidationError, ServerError } from './ErrorClasses.js';

function errorHandler(err, req, res, _next) {
    console.log(err);

    if (err instanceof ValidationError) res.status(400).json(err);
    else {
        const err = new ServerError();
        res.status(500).json(err);
    }
}

export default errorHandler;
