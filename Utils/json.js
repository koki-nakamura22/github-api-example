const fs = require("fs");
const path = require("path");

const writeJsonFileSync = (data, outputDir, filename) => {
  const jsonStr = JSON.stringify(data, null, 2);
  const outputJsonFilePath = path.join(outputDir, filename);
  fs.writeFileSync(outputJsonFilePath, jsonStr);
};

exports.writeJsonFileSync = writeJsonFileSync;
