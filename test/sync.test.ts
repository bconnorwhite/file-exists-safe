/* eslint-disable import/no-relative-parent-imports, @typescript-eslint/no-floating-promises */
import assert from "node:assert/strict";
import { afterEach, beforeEach, test } from "node:test";
import mock, { restore, directory } from "mock-fs";
import { fileExistsSync } from "../src/index.ts";

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

test("sync exists", () => {
  assert.equal(fileExistsSync("/test/note.md"), true);
});

test("sync not exists", () => {
  assert.equal(fileExistsSync("/test/nope.md"), false);
});

test("directory", () => {
  assert.equal(fileExistsSync("/test/dir"), false);
});

test("directory included", () => {
  assert.equal(fileExistsSync("/test/dir", { includeDirectories: true }), true);
});

test("sync no access", () => {
  assert.equal(fileExistsSync("/no-access/error.md"), undefined);
});
