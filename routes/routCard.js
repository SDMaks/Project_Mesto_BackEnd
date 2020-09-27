const routCard = require('express').Router();

const {
  findCard, createCard, deleteCard,
} = require('../controllers/cards');

routCard.get('/', findCard);
routCard.post('/', createCard);
routCard.delete('/:cardId', deleteCard);

module.exports = routCard;
