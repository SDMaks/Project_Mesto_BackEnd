const routCard = require('express').Router();

const { readFiles } = require('../helpers/helpers.js');

routCard.get('/cards', async (req, res) => {
  try {
    const cardsObject = await readFiles('cards.json');
    const dataCards = JSON.parse(cardsObject);
    res.send(dataCards);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = routCard;
