const routUser = require('express').Router();

const { sendJsonfiles, findUser, readFiles } = require('../helpers/helpers.js');

// на запрос '/users' в ответ отправляется массив в формате .json

routUser.get('/users', (req, res) => {
  sendJsonfiles('user.json', res);
  // в файле helpers есть фукции по чтению и обработке данных
});

routUser.get('/users/:id', (req, res) => {
  const nameStream = readFiles('user.json', res);

  let userChunk = ''; // создаем пустой объект

  nameStream.on('data', (data) => {
    userChunk += data; // добавляем прочтенные данные в формате json
  });

  nameStream.on('end', () => {
    const userChunkObject = JSON.parse(userChunk); // парсим в объект

    // Проверка, если запрашиваемого пользовотеля по данному id нет, то отправляется ответ

    if (!findUser(userChunkObject, [req.params.id])) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });

      // не забудем выйти из функции
      return;
    }

    res.send(findUser(userChunkObject, [req.params.id]));
    // берем функцию из helpers -> добавлем параметры и отпраляем пользователю
  });
});

module.exports = routUser;
