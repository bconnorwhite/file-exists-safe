<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>file-exists-safe</h1>
  <a href="https://npmjs.com/package/file-exists-safe">
    <img alt="npm" src="https://img.shields.io/npm/v/file-exists-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/file-exists-safe">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/file-exists-safe.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/file-exists-safe?branch=main">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/file-exists-safe.svg?branch=main">
  </a>
</div>

<br />

<blockquote align="center">Check if a file exists without try catch.</blockquote>

---
<!--END HEADER-->

- Returns `true` if the path exists and is a file.
- Returns `false` if the path is not a file, or does not exist.
- Returns `undefined` on other errors, such as permission denied, rather than throwing.

<!-- BEGIN INSTALLATION -->
## Installation

<details open>
  <summary>
    <a href="https://www.npmjs.com/package/file-exists-safe">
      <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white" alt="NPM" />
    </a>
  </summary>

```sh
npm install file-exists-safe
```

</details>

<details>
  <summary>
    <a href="https://yarnpkg.com/package/file-exists-safe">
      <img src="https://img.shields.io/badge/yarn-2C8EBB?logo=yarn&logoColor=white" alt="Yarn" />
    </a>
  </summary>

```sh
yarn add file-exists-safe
```

</details>

<details>
  <summary>
    <img src="https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white" alt="PNPM" />
  </summary>

```sh
pnpm add file-exists-safe
```

</details>

<details>
  <summary>
    <img src="https://img.shields.io/badge/bun-EE81C3?logo=bun&logoColor=white" alt="Bun" />
  </summary>

```sh
bun add file-exists-safe
```

</details>
<!-- END INSTALLATION -->

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
<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/file-exists-safe.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _MIT License_
<!--END FOOTER-->

## Related Packages

- [fs-safe](https://www.npmjs.com/package/fs-safe): A simple fs wrapper that doesn't throw
- [dir-exists-safe](https://www.npmjs.com/package/dir-exists-safe): Check if a directory exists without a try catch
