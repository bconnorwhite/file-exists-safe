<div align="center">
  <a href="https://github.com/bconnorwhite/file-exists-safe">
    <img alt="file-exists-safe" src="assets/header.svg" />
  </a>
  <a href="https://npmjs.com/package/file-exists-safe">
    <img alt="NPM" src="https://img.shields.io/npm/v/file-exists-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/file-exists-safe">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/file-exists-safe.svg">
  </a>
  <a href='https://coveralls.io/github/bconnorwhite/file-exists-safe?branch=master'>
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/file-exists-safe.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/file-exists-safe">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/file-exists-safe?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Check if a file exists without try catch.

- Returns `true` if the path exists and is a file.
- Returns `false` if the path is not a file, or does not exist.
- Returns `undefined` on other errors (for example, permission denied) rather than throwing.

## Installation

```sh
yarn add file-exists-safe
```

```sh
npm install file-exists-safe
```

## API

```ts
import { fileExists, fileExistsSync, Options } from "file-exists-safe";

function fileExists(path: string, options?: Options): Promise<boolean | undefined>;

function fileExistsSync(path: string, options?: Options): boolean | undefined;

type Options = {
  /**
   * Return true if path is directory. Default: `false`
   */
  includeDirectories?: boolean;
}
```

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/file-exists-safe.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for typescript projects
- [@types/mock-fs](https://www.npmjs.com/package/@types/mock-fs): TypeScript definitions for mock-fs
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js
- [mock-fs](https://www.npmjs.com/package/mock-fs): A configurable mock file system.  You know, for testing.

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/file-exists-safe.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)

<br />

## Related Packages

- [fs-safe](https://www.npmjs.com/package/fs-safe): A simple fs wrapper that doesn't throw
- [dir-exists-safe](https://www.npmjs.com/package/dir-exists-safe): Check if a directory exists without a try catch
