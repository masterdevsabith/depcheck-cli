#!/usr/bin/env node

import { program } from "commander";
import checkUnused from "../src/unused.js";
import checkDeprecated from "../src/deprecated.js";

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
