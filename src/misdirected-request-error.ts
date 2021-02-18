import { HttpError } from './http-error';

export class MisdirectedRequestError extends HttpError {
  constructor(message = 'The request was directed at a server that is not able to produce a response.') {
    super(421, 'MisdirectedRequestError', message);
  }
}
