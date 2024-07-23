export class NotFoundError extends Error {
    public readonly status: number;

    constructor(message: string = 'Not Found') {
        super(message);
        this.name = 'NotFoundError';
        this.status = 404;

        // Set the prototype explicitly to ensure instanceof works correctly
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}

export class AppError extends Error {
    public readonly status: number;
    constructor(
        message: string = 'Application Error',
        public readonly statusCode: number
    ) {
        super(message);
        this.name = 'Application Error';
        this.status = 403;
        Object.setPrototypeOf(this, AppError.prototype);
    }
}

export class BadRequestError extends Error {
    public readonly status: number;
    constructor(message: string = 'Bad Request') {
        super(message);
        this.status = 400;
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}

export class UnauthorizedError extends Error {
    public readonly status: number;
    constructor(message: string = 'Unauthorized') {
        super(message);
        this.status = 401;
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}

export class ForbiddenError extends Error {
    public readonly status: number;
    constructor(message: string = 'Forbidden') {
        super(message);
        this.status = 403;
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}

export class ValidationError extends Error {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    public validationErrors: string[] | Record<string, any>;
    public readonly status: number;

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    constructor(message: string, validationErrors: string[] | Record<string, any>) {
        super(message);
        this.validationErrors = validationErrors;
        this.status = 400;
    }
}
