import fetch, { json } from "npm-registry-fetch";
import fs from "fs";
import chalk from "chalk";

export default async function checkDeprecated() {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));
  const declaredDeps = Object.keys(pkg.dependencies || {});

  for (let dep of declaredDeps) {
    try {
      const info = await fetch.json(dep);
      if (info.deprecated) {
        console.log(chalk.red(`⚠ ${dep}: ${info.deprecated}`));
      }
    } catch (err) {
      console.log(chalk.gray(`Could not fetch ${dep}`));
    }
  }
}
