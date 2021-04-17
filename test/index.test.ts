/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HttpError,
  BadGatewayError,
  BadRequestError,
  BandwidthLimitExceededError,
  ConflictError,
  ExpectationFailedError,
  FailedDependencyError,
  ForbiddenError,
  GatewayTimeoutError,
  GoneError,
  HttpVersionNotSupportedError,
  InsufficientStorageError,
  InternalServerErrorError,
  LengthRequiredError,
  LockedError,
  LoopDetectedError,
  MethodNotAllowedError,
  MisdirectedRequestError,
  NetworkAuthenticationRequiredError,
  NotAcceptableError,
  NotExtendedError,
  NotFoundError,
  NotImplementedError,
  PaymentRequiredError,
  PreconditionFailedError,
  PreconditionRequiredError,
  ProxyAuthenticationRequiredError,
  RequestedRangeNotSatisfiableError,
  RequestEntityTooLargeError,
  RequestHeaderFieldsTooLargeError,
  RequestTimeoutError,
  RequestURITooLongError,
  ServiceUnavailableError,
  TooEarlyError,
  TooManyRequestsError,
  UnauthorizedError,
  UnavailableForLegalReasonsError,
  UnprocessableEntityError,
  UnsupportedMediaTypeError,
  UpgradeRequiredError,
  VariantAlsoNegotiatesError,
} from '../src';

describe('HttpError', () => {
  test('should extend Error', () => {
    const error = new HttpError(400, 'BadRequestError', 'bad request');
    expect(error).toBeInstanceOf(Error);
  });
});

const httpTable: [number, string, any][] = [
  [400, 'BadRequestError', BadRequestError],
  [401, 'UnauthorizedError', UnauthorizedError],
  [402, 'PaymentRequiredError', PaymentRequiredError],
  [403, 'ForbiddenError', ForbiddenError],
  [404, 'NotFoundError', NotFoundError],
  [405, 'MethodNotAllowedError', MethodNotAllowedError],
  [406, 'NotAcceptableError', NotAcceptableError],
  [407, 'ProxyAuthenticationRequiredError', ProxyAuthenticationRequiredError],
  [408, 'RequestTimeoutError', RequestTimeoutError],
  [409, 'ConflictError', ConflictError],
  [410, 'GoneError', GoneError],
  [411, 'LengthRequiredError', LengthRequiredError],
  [412, 'PreconditionFailedError', PreconditionFailedError],
  [413, 'RequestEntityTooLargeError', RequestEntityTooLargeError],
  [414, 'RequestURITooLongError', RequestURITooLongError],
  [415, 'UnsupportedMediaTypeError', UnsupportedMediaTypeError],
  [416, 'RequestedRangeNotSatisfiableError', RequestedRangeNotSatisfiableError],
  [417, 'ExpectationFailedError', ExpectationFailedError],
  [421, 'MisdirectedRequestError', MisdirectedRequestError],
  [422, 'UnprocessableEntityError', UnprocessableEntityError],
  [423, 'LockedError', LockedError],
  [424, 'FailedDependencyError', FailedDependencyError],
  [425, 'TooEarlyError', TooEarlyError],
  [426, 'UpgradeRequiredError', UpgradeRequiredError],
  [428, 'PreconditionRequiredError', PreconditionRequiredError],
  [429, 'TooManyRequestsError', TooManyRequestsError],
  [431, 'RequestHeaderFieldsTooLargeError', RequestHeaderFieldsTooLargeError],
  [451, 'UnavailableForLegalReasonsError', UnavailableForLegalReasonsError],
  [500, 'InternalServerErrorError', InternalServerErrorError],
  [501, 'NotImplementedError', NotImplementedError],
  [502, 'BadGatewayError', BadGatewayError],
  [503, 'ServiceUnavailableError', ServiceUnavailableError],
  [504, 'GatewayTimeoutError', GatewayTimeoutError],
  [505, 'HttpVersionNotSupportedError', HttpVersionNotSupportedError],
  [506, 'VariantAlsoNegotiatesError', VariantAlsoNegotiatesError],
  [507, 'InsufficientStorageError', InsufficientStorageError],
  [508, 'LoopDetectedError', LoopDetectedError],
  [509, 'BandwidthLimitExceededError', BandwidthLimitExceededError],
  [510, 'NotExtendedError', NotExtendedError],
  [511, 'NetworkAuthenticationRequiredError', NetworkAuthenticationRequiredError],
];

describe.each(httpTable)('%i %s', (status, name, ErrorClass) => {
  test('should extend HttpError', () => {
    const error = new ErrorClass();
    expect(error).toBeInstanceOf(HttpError);
  });

  test('should have the right status', () => {
    const error = new ErrorClass();
    expect(error.status).toBe(status);
  });

  test('should have the right name', () => {
    const error = new ErrorClass();
    expect(error.name).toBe(name);
  });
});
