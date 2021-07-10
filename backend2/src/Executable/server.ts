import { Backend } from "../backend";

async function main() {
  const backend = new Backend();
  await backend.open();
}

main();
