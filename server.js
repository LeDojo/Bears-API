const express = require("express");
const app = express();
const volleyball = require("volleyball");

const port = process.env.PORT || 4567;

// connect to mongodb
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/creteil_bears");
  console.log(`[DATABASE] connect to mongodb`);
}

app.use(express.urlencoded({ extended: false }));
app.use(volleyball);
app.get("/", (req, res) => {
  res.send("Welcome to express API");
});
// app.get('/bonjour/:name', (req, res) => {
//   res.send(`reoucouc ${req.params.name}`)
// })

app.use("/bears", require("./routes/bears"));

app.listen(port, () => console.log(`[SERVER]listening on port ${port}`));
