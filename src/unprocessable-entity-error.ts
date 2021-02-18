import { HttpError } from './http-error';

export class UnprocessableEntityError extends HttpError {
  constructor(message = 'The request was formatted correctly but cannot be processed in its current form.') {
    super(422, 'UnprocessableEntityError', message);
  }
}
