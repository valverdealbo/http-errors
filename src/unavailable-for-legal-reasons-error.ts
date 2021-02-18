import { HttpError } from './http-error';

export class UnavailableForLegalReasonsError extends HttpError {
  constructor(
    message = 'A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.',
  ) {
    super(451, 'UnavailableForLegalReasonsError', message);
  }
}
