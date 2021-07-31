// image read

import fs from "fs";

const bufferdata =
  "data:image/png;base64,iVBORw0KGgoAABANSUhEUgAAABQAAAAUCAYAAACNiR0" +
  "NAAAAKElEQVQ4jWNgYGD4Twzu6FhFFGYYNXDUwGFpIAk2E4dHDRw1cDgaCAASFOffhEIO" +
  "3gAAAABJRU5ErkJggg==iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0" +
  "NAAAAKElEQVQ4jWNgYGD4Twzu6FhFFGYYNXDUwGFpIAk2E4dHDRw1cDgaCAASFOffhEIO" +
  "3gAAAABJRU5ErkJggg==";

async function main() {
  const buffer = Buffer.from(
    bufferdata.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );
  fs.writeFile(__dirname + "image.png", buffer, (err) => {
    console.log(err);
  });
}

main();
