import { HttpError } from './http-error';

export class PreconditionFailedError extends HttpError {
  constructor(message = 'The server does not meet one of the preconditions specified by the client.') {
    super(412, 'PreconditionFailedError', message);
  }
}
