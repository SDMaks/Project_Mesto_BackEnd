const routCard = require("express").Router();

const { sendJsonfiles } = require("../helpers/helpers.js");

routCard.get("/cards", (req, res) => {
  sendJsonfiles("cards.json", res);
});

module.exports = routCard;
