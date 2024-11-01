import * as fs from "fs";

const log = fs.createWriteStream("/mnt/c/Users/charlie/Documents/GitRep/builder-lsp/log.txt");

export default {
  write: (message: object | unknown) => {
    if (typeof message === "object") {
      log.write(JSON.stringify(message));
    } else {
      log.write(message);
    }
    log.write("\n");
  },
};
