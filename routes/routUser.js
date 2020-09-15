const routUser = require('express').Router();

const { findUser, readFiles } = require('../helpers/helpers.js');

// на запрос '/users' в ответ отправляется массив в формате .json

routUser.get('/users', async (req, res) => {

  try {
     // ждём пока файл будет прочитан
     const data = await readFiles('user.json');
     // отправляем его
     res.send(data);
   } catch(err) {
     // а если наш код упал, то возвращаем 500
     res.status(500).send({ message: err.message });
   }

 });

 routUser.get('/users/:id', async (req, res) => {
  try{
const nameStream = await readFiles('user.json');

 if (!findUser(nameStream, [req.params.id])) {
        res.status(404).send({ Error: 'Нет пользователя с таким id' });
        return;
      } else {

res.send(findUser(nameStream, [req.params.id]));
}


} catch(err) {
  res.status(500).send({ message: err.message });
}
});

module.exports = routUser;