import { FieldValidationError } from "express-validator";
import { CustomError } from "./custom-errors";

export class RequestValidationError extends CustomError {
    statusCode = 400;

    constructor(public errors: FieldValidationError[]) {
        super('Invalid request parameters');

        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        return this.errors.map(err => {
          return { message: err.msg, field: err.path };
        });
    }
}