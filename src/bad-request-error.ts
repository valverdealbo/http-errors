import { HttpError } from './http-error';

export class BadRequestError extends HttpError {
  constructor(message = 'The request could not be fulfilled due to the incorrect syntax of the request.') {
    super(400, 'BadRequestError', message);
  }
}
