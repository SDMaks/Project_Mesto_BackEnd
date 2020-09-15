const routCard = require('express').Router();

const { readFiles } = require('../helpers/helpers.js');

routCard.get('/cards', async (req, res) => {

  try{
    const dataCards = await readFiles('cards.json');
    res.send(dataCards);

  } catch(err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = routCard;
