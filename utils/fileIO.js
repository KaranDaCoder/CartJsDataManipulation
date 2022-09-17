const fs = require('fs').promises;
const path = require('path');

const readFiles = async (pathToFile, encoding) => {
  fs.readFile(pathToFile, encoding, (err, data) => {
    if (err) throw err;
    console.log('Reading 1....', data);
    return data;
  });
};

const readAFile = async (pathToFile) => {
  try {
    const fileRead = await readFiles(pathToFile, 'utf-8');
    console.log('Reading 2....', fileRead);
    return fileRead;
  } catch (err) {
    console.log(err);
  }
};

readAFile('/Users/kkhot/Documents/CartJsDataManipulation/dataset/Pantry.js');
console.log(path.join(__dirname));
