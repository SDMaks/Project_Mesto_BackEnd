const fs = require('fs');
const path = require('path');

// пребразум путь до файла с данными
function readFiles(fileName, res) {
  const fileReaderCard = fs.createReadStream(
    path.join(__dirname, '../data', fileName), { encoding: 'utf8' },
  );

  fileReaderCard.on('error', () => {
    res.status(500).json({ error: 'На сервере произошла ошибка' });
  });
  return fileReaderCard;
}

function sendJsonfiles(file, res) {
  res.writeHead(200, {
    'content-type': 'application/json; charset=utf-8',
  });

  readFiles(file, res).pipe(res); // используем метод для комбинирования потоков pipe
}

function findUser(arr, req) {
  return arr.find((item) => item._id === req.toString());
}

module.exports = {
  readFiles,
  sendJsonfiles,
  findUser,
};
