class ServerError extends Error {
    constructor(message = 'Internal Server Error') {
        super();
        this.message = message;
        this.errorType = 'SERVER_ERROR';
        this.success = false;
    }
}

class ValidationError extends Error {
    constructor(errors, status = 400) {
        super();
        this.message = 'Validation failed';
        this.errorType = 'VALIDATION_ERROR';
        this.errors = errors;
        this.success = false;
        this.status = status;
    }
}

class ApplicationError extends Error {
    constructor(message = '', status = 400) {
        super();
        this.message = message;
        this.errorType = 'APPLICATION_ERROR';
        this.success = false;
        this.status = status;
    }
}

export { ServerError, ValidationError, ApplicationError };
