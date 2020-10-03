import { test, expect } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { fileExists, fileExistsSync } from "../source";

beforeEach(async () => {
  mock({
    "/test": {
      "note.md": "hello world!"
    },
    "/no-access": directory({
      mode: 0,
      items: {
        "error.md": "error"
      }
    })
  })
});

afterEach(async () => {
  restore();
});

test("basic exists", async () => {
  return fileExists("/test/note.md").then((exists) => {
    expect(exists).toBe(true);
  });
});

test("basic not exists", async () => {
  return fileExists("/test/nope.md").then((exists) => {
    expect(exists).toBe(false);
  });
});

test("basic no access", async () => {
  return fileExists("/no-access/error.md").then((exists) => {
    expect(exists).toBe(undefined);
  });
});

test("basic sync exists", () => {
  expect(fileExistsSync("/test/note.md")).toBe(true);
});

test("basic sync not exists", () => {
  expect(fileExistsSync("/test/nope.md")).toBe(false);
});

test("basic sync not exists", () => {
  expect(fileExistsSync("/no-access/error.md")).toBe(undefined);
});
