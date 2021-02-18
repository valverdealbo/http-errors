import { HttpError } from './http-error';

export class FailedDependencyError extends HttpError {
  constructor(message = 'The request failed due to a failure of a previous request.') {
    super(424, 'FailedDependencyError', message);
  }
}
