const argv = require("./config/yargs");
const { createTable } = require("./helpers/multiply");

// Using argv from cli
// const [, , arg3 = 'base=1'] = process.argv;
// const [, base] = arg3.split("=");

// Using yargs
const base = argv.base;
const list = argv.list;
const count = argv.count;

createTable(base, list, count)
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
