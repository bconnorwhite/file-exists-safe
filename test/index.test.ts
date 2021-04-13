import { test, expect } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { fileExists } from "../source";

beforeEach(async () => {
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

afterEach(async () => {
  restore();
});

test("exists", async () => {
  return fileExists("/test/note.md").then((exists) => {
    expect(exists).toBe(true);
  });
});

test("not exists", async () => {
  return fileExists("/test/nope.md").then((exists) => {
    expect(exists).toBe(false);
  });
});

test("directory", async () => {
  return fileExists("/test/dir").then((exists) => {
    expect(exists).toBe(false);
  });
});

test("directory included", async () => {
  return fileExists("/test/dir", { includeDirectories: true }).then((exists) => {
    expect(exists).toBe(true);
  });
});

test("no access", async () => {
  return fileExists("/no-access/error.md").then((exists) => {
    expect(exists).toBe(undefined);
  });
});
