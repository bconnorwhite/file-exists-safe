import { test, expect } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { fileExistsSync } from "../source";

beforeEach(async () => {
  mock({
    "/test": {
      "note.md": "hello world!",
      "dir": directory({})
    },
    "/no-access": directory({
      mode: 0,
      items: {
        "error.md": "error"
      }
    })
  });
});

afterEach(async () => {
  restore();
});

test("sync exists", () => {
  expect(fileExistsSync("/test/note.md")).toBe(true);
});

test("sync not exists", () => {
  expect(fileExistsSync("/test/nope.md")).toBe(false);
});

test("directory", () => {
  expect(fileExistsSync("/test/dir")).toBe(false);
});

test("directory included", async () => {
  expect(fileExistsSync("/test/dir", { includeDirectories: true })).toBe(true);
});

test("sync no access", () => {
  expect(fileExistsSync("/no-access/error.md")).toBe(undefined);
});
