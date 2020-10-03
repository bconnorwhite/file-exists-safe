import { promises, statSync } from "fs";

function handleError(e: any) {
  if(e.code === "ENOENT") {
    return false;
  } else {
    return undefined;
  }
}

export async function fileExists(path: string) {
  return promises.stat(path).then((result) => {
    return result.isFile();
  }).catch((e) => {
    return handleError(e);
  });
}

export function fileExistsSync(path: string) {
  try {
    return statSync(path).isFile();
  } catch(e) {
    return handleError(e);
  }
}
