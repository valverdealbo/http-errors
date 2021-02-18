import { HttpError } from './http-error';

export class ForbiddenError extends HttpError {
  constructor(message = 'The request was formatted correctly but the server is refusing to supply the requested resource.') {
    super(403, 'ForbiddenError', message);
  }
}
