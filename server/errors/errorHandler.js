import { ValidationError, ServerError } from './ErrorClasses.js';

function errorHandler(err, req, res, _next) {
    console.log(err);

    if (err instanceof ValidationError) res.staus(400).json(err);
    else {
        const err = new ServerError();
        res.staus(500).json(err);
    }
}

export default errorHandler;
