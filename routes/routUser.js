const routUser = require('express').Router();

const {
  findUser, findUserId, createUser, updateUser,
} = require('../controllers/users');

routUser.get('/', findUser);
routUser.get('/:userId', findUserId);
routUser.post('/', createUser);
routUser.patch('/me', updateUser);

module.exports = routUser;
