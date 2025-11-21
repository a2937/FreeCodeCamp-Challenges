import { readFile, writeFile } from "fs/promises";
import { join } from "path";

(async () => {
  const csv = await readFile(join(process.cwd(), "data.csv"), "utf-8");
  const lines = csv.split(/\n+/);
  const result = [];
  const [header, ...data] = lines;
  for (const line of data) {
    const id = line.split(",")[5].trim();
    console.log(`Got ${id} from ${line}`)
    const numberRegex = /^\d{16,19}$/;
    if (id && numberRegex.test(id)) {
      result.push(line)
    } else {
      console.error(`${id} did not match.`)
      console.log(typeof id)
    }
  }
  await writeFile(join(process.cwd(), "filtered.csv"), [header, ...result].join("\n"), "utf-8")
})();