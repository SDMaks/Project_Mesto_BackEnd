const express = require("express");
const routCard = require("./routes/routCard.js");
const routUser = require("./routes/routUser.js");
const app = express();
const path = require("path");
const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, "public")));
app.use(routCard);
app.use(routUser);

app.use((req, res) => {
  res.status(404).send({ message: "Запрашиваемый ресурс не найден" });
});

app.listen(PORT);
