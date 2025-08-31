const fg = require("fast-glob");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

module.exports = async function checkUnused() {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));
  const declaredDeps = Object.keys(pkg.dependencies || {});
  const files = await fg(["src/**/*.{js,ts,jsx,tsx}"], { absolute: true });

  let usedDeps = new Set();

  for (let file of files) {
    const content = fs.readFileSync(file, "utf-8");
    declaredDeps.forEach((dep) => {});
  }
};
