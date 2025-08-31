#!/usr/bin/env node

const { program } = require("commander");
const checkUnused = require("../src/unused");
const checkDeprecated = require("../src/deprecated");

program
  .name("depcheck-cli")
  .description(
    "A CLI tool to check for unused and deprecated dependencies in node module folder"
  )
  .version("0.1.0");

program
  .command("unused")
  .description("check for unused dependencies")
  .action(async () => {
    await checkUnused();
  });

program
  .command("deprecated")
  .description("check for deprecated dependencies")
  .action(async () => {
    await checkDeprecated();
  });

program.parse(process.argv);
