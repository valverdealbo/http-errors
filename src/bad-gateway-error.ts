import { HttpError } from './http-error';

export class BadGatewayError extends HttpError {
  constructor(message = 'The server is acting as a proxy and did not receive an acceptable response from the upstream server.') {
    super(502, 'BadGatewayError', message);
  }
}
