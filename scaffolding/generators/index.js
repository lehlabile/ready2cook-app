/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const componentGenerator = require("./component/index.js");
const screenGenerator = require("./screen/index.js");

const apiGenerator = require("./api/index.js");

module.exports = (plop) => {
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("screen", screenGenerator);
  plop.setGenerator("api", apiGenerator);
  plop.addHelper("directory", (comp) => {
    try {
      fs.accessSync(path.join(__dirname, `../../src/screens/${comp}`), fs.F_OK);
      return `src/screens/${comp}`;
    } catch (e) {
      return `src/components/${comp}`;
    }
  });
  plop.addHelper("curly", (object, open) => (open ? "{" : "}"));
  plop.setActionType("prettify", (answers, config) => {
    const folderPath = `${path.join(
      __dirname,
      "/../../src/",
      config.path,
      plop.getHelper("properCase")(answers.name),
      "**.js"
    )}`;
    exec(`npm run prettify -- "${folderPath}"`);
    return folderPath;
  });
};
