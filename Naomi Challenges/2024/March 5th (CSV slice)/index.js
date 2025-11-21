const fs = require("node:fs/promises");

async function doWork() {
  var fileContents = (await fs.readFile("data.csv")).toString();
  var pattern = /(\d{16}|\d{17}|\d{18}|\d{19}|\d{20})\s*,[\w]+\s*,\s*"[\s\w\n,!?'\-\.]+"/gi
  var matches = fileContents.match(pattern) || [];
  await fs.rm("clean_data.csv");
  for (let i = 0; i < matches.length; i++) {
    await fs.appendFile("clean_data.csv", matches[i].toString().replace(/\n|\r\n/g, " ") + "\n");
  }
}

doWork(); 