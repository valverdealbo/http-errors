# @valbo/http-errors

HTTP error classes with a status, name and message.

![npm (scoped)](https://img.shields.io/npm/v/@valbo/http-errors)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![Build Status](https://img.shields.io/github/workflow/status/valverdealbo/http-errors/CI)
[![Coverage Status](https://coveralls.io/repos/github/valverdealbo/http-errors/badge.svg?branch=main)](https://coveralls.io/github/valverdealbo/http-errors?branch=main)
[![Known Vulnerabilities](https://snyk.io/test/github/valverdealbo/http-errors/badge.svg?targetFile=package.json)](https://snyk.io/test/github/valverdealbo/http-errors?targetFile=package.json)

## Install

```bash
npm install @valbo/http-errors
```
## Usage

The **HttpError** class extends **Error** and allows you to create a http error with a status, name and message:

```typescript
import { HttpError } from '@valbo/http-errors';

const error = new Error(401, 'MissingCredentialsError', 'Missing Authorization header.');
console.log(`${error.status} ${error.name}: ${error.message}`);
```

```JSON
"401 MissingCredentialsError: Missing Authorization header."
```

There is a subclass of **HttpError** for every standard HTTP error. The status and name are hardcoded, and they have a standard message that you can change:

```typescript
import { NotFoundError, UnauthorizedError } from '@valbo/http-errors';

const notFound = new NotFoundError();
console.log(`${notFound.status} ${notFound.name}: ${notFound.message}`);
```

```JSON
"404 NotFoundError: The resource could not be found."
```

```typescript
const unauthorized = new UnauthorizedError('The token has expired.');
console.log(`${unauthorized.status} ${unauthorized.name}: ${unauthorized.message}`);
```

```JSON
"401 UnauthorizedError: The token has expired."
```
