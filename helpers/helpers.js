const fs = require('fs');
const path = require('path');

// пребразум путь до файла с данными
const readFiles = (fileName) => new Promise((resolve, reject) => {
  fs.readFile(path.join(__dirname, '../data', fileName), { encoding: 'utf8' }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      // при JSON.parse() так же может возникнуть ошибка, если сам json будет невалидным
      resolve((data));
    }
  });
});

function findUser(arr, req) {
  return arr.find((item) => item._id === req.toString());
}

module.exports = {
  readFiles,
  findUser,
};
