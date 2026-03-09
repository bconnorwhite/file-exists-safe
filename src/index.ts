import { promises, statSync, type Stats } from "node:fs";

export type Options = {
  /**
   * Return true if path is directory. Default: `false`
   */
  includeDirectories?: boolean;
};

type FsError = {
  code?: string;
};

function handleError(error: FsError) {
  return error.code === "ENOENT" ? false : undefined;
}

function handleResult(result: Stats, options?: Options) {
  return result.isFile() || Boolean(options?.includeDirectories && result.isDirectory());
}

export async function fileExists(path: string, options?: Options): Promise<boolean | undefined> {
  return promises.stat(path).then((result) => {
    return handleResult(result, options);
  }).catch((error: unknown) => {
    return handleError(error as FsError);
  });
}

export function fileExistsSync(path: string, options?: Options): boolean | undefined {
  try {
    return handleResult(statSync(path), options);
  } catch(error) {
    return handleError(error as FsError);
  }
}
