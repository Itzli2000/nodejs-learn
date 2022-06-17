const fs = require("fs");
const colors = require("colors");

const createTable = async (base, list, count) => {
  try {
    let dir = "./output";

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    console.clear();
    let exit = `=====================\n==== Tabla del ${base} ====`;
    let consoleExit = `=====================\n==== Tabla del ${base} ====`;
    for (let index = 1; index <= count; index++) {
      exit += `\n${base} * ${index} = ${base * index}`;
      consoleExit += colors.white(`\n${base} ${'*'.green} ${index} ${'='.green} ${base * index}`);
    }

    if (list) console.log(consoleExit.green);

    fs.writeFileSync(`./output/tabla-del-${base}.txt`, exit);
    return `./output/tabla-del-${base} creado`;
  } catch (error) {
    throw error;
  }
};

module.exports = { createTable };
