import { Backend } from "../Backend";
import { Configuration } from "../Configuration";

function main() {
  const backend = new Backend();
  backend.open(Configuration.PORT);
}

main();
