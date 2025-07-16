class ServerError extends Error {
    constructor() {
        super();
        this.message = 'Internal Server Error';
        this.errorType = 'SERVER_ERROR';
        this.success = 'false';
    }
}

class ValidationError extends Error {
    constructor(errors) {
        super();
        this.message = 'Validation failed';
        this.errorType = 'VALIDATION_ERROR';
        this.errors = errors;
        this.success = 'false';
    }
}

export { ServerError, ValidationError };
