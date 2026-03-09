/* eslint-disable import/no-relative-parent-imports, @typescript-eslint/no-floating-promises */
import assert from "node:assert/strict";
import { afterEach, beforeEach, test } from "node:test";
import mock, { restore, directory } from "mock-fs";
import { fileExists } from "../src/index.ts";

beforeEach(() => {
  mock({
    "/test": {
      "note.md": "hello world!",
      "dir": {}
    },
    "/no-access": directory({
      mode: 0,
      items: {
        "error.md": "error"
      }
    })
  });
});

afterEach(() => {
  restore();
});

test("exists", async () => {
  assert.equal(await fileExists("/test/note.md"), true);
});

test("not exists", async () => {
  assert.equal(await fileExists("/test/nope.md"), false);
});

test("directory", async () => {
  assert.equal(await fileExists("/test/dir"), false);
});

test("directory included", async () => {
  assert.equal(await fileExists("/test/dir", { includeDirectories: true }), true);
});

test("no access", async () => {
  assert.equal(await fileExists("/no-access/error.md"), undefined);
});
