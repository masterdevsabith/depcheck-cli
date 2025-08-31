import fg from "fast-glob";
import fs from "fs";
import path from "path";
import chalk from "chalk";

export default async function checkUnused() {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));
  const declaredDeps = Object.keys(pkg.dependencies || {});
  const files = await fg(["src/**/*.{js,ts,jsx,tsx}"], { absolute: true });

  let usedDeps = new Set();

  for (let file of files) {
    const content = fs.readFileSync(file, "utf-8");
    declaredDeps.forEach((dep) => {
      if (
        content.includes(`require("${dep}`) ||
        content.includes(`from "${dep}`)
      ) {
        usedDeps.add(dep);
      }
    });
  }

  const unused = declaredDeps.filter((dep) => !usedDeps.has(dep));
  if (unused.length === 0) {
    console.log(chalk.green("No unused dependencies found."));
  } else {
    console.log(chalk.red("Unused dependencies:"));
    unused.forEach((dep) => console.log(` - ${dep}`));
  }
}
