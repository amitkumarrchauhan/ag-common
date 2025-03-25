import { check as _check } from "./check";
import { Logger } from "./logger/Logger";
export { _check as check, Logger };

// export namespace '@ag-common/utils' {
//     export const check = _check;
// }

(function () {
  const logger = Logger.getLogger("index.ts");

  logger.log("This is the main entry point of utils package");
})();
