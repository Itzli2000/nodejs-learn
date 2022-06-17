const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base to create the multiply table",
  })
  .check((argv) => {
    if (isNaN(argv.b)) {
      throw "Base must be a number";
    }
    return true;
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe: "Show created table in console",
  })
  .option("c", {
    alias: "count",
    type: "number",
    default: 10,
    describe: "Show table from 1 to 'count'",
  })
  .check((argv) => {
    if (isNaN(argv.c)) {
      throw "Count must be a number";
    }
    return true;
  })
  .argv;

module.exports = argv;
