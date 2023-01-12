<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>file-exists-safe</h1>
  <a href="https://npmjs.com/package/file-exists-safe">
    <img alt="NPM" src="https://img.shields.io/npm/v/file-exists-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/file-exists-safe">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/file-exists-safe.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/file-exists-safe?branch=master">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/file-exists-safe.svg?branch=master">
  </a>
</div>

<br />

<blockquote align="center">Check if a file exists without try catch.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/file-exists-safe">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/file-exists-safe?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

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

```sh
pnpm add file-exists-safe
```

## Usage

```ts
import { fileExists, fileExistsSync, Options } from "file-exists-safe";

function fileExists(path: string, options?: Options): Promise<boolean | undefined>;

function fileExistsSync(path: string, options?: Options): boolean | undefined;

type Options = {
  /**
   * Return true if path is directory. Default: `false`
   */
  includeDirectories?: boolean;
};
```
<!--BEGIN FOOTER-->

<br />

<h2>Dev Dependencies</h2>

- [@types/mock-fs](https://www.npmjs.com/package/@types/mock-fs): TypeScript definitions for mock-fs
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js
- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.
- [mock-fs](https://www.npmjs.com/package/mock-fs): A configurable mock file system.  You know, for testing.


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/file-exists-safe.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->

<br />

## Related Packages

- [fs-safe](https://www.npmjs.com/package/fs-safe): A simple fs wrapper that doesn't throw
- [dir-exists-safe](https://www.npmjs.com/package/dir-exists-safe): Check if a directory exists without a try catch
