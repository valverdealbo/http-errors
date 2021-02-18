import { HttpError } from './http-error';

export class PreconditionRequiredError extends HttpError {
  constructor(message = 'The origin server requires the request to be conditional.') {
    super(428, 'PreconditionRequiredError', message);
  }
}
