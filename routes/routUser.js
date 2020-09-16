const routUser = require('express').Router();

const { findUser, readFiles } = require('../helpers/helpers.js');

// на запрос '/users' в ответ отправляется массив в формате .json

routUser.get('/users', async (req, res) => {
// const x = readFiles('user.json');

  try {
    // ждём пока файл будет прочитан
    const objectUsers = await readFiles('user.json');
    const dataUsers = JSON.parse(objectUsers);
    // отправляем его
    res.send(dataUsers);
  } catch (err) {
    // а если наш код упал, то возвращаем 500
    res.status(500).send({ message: err.message });
  }
});

routUser.get('/users/:id', async (req, res) => {
  try {
    const data = await readFiles('user.json');
    const dataFiles = JSON.parse(data);
    // const nameStream = await readFiles('user.json');

    if (!findUser(dataFiles, [req.params.id])) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
      return;
    }

    res.send(findUser(dataFiles, [req.params.id]));
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = routUser;
