const bearRouter = require("express").Router();
const Bear = require("../models/bearModel");
// const bearRouter = express.Router()


/*
async/await  = loading data before display
try/catch  => try ... make the action / catch if error
*/

// METHOD GET - ALL BEARS
bearRouter.get("/all", async (req, res) => {
  try {
    const bears = await Bear.find({});
    res.send(bears);
  } catch (error) {
    console.log(error);
  }
});
// // METHOD GET - get a bear by own id
bearRouter.get("/:id", async (req, res) => {
  try {
    const bear = await Bear.findOne({ _id: req.params.id });
    res.send(bear);
  } catch (error) {
    console.log(error);
  }
});
// METHOD POST - create a new bear & save on database
bearRouter.post("/new", async (req, res) => {
  try {
    let newBear = new Bear(req.body);
    await newBear.save(newBear);
    res.send(newBear);
  } catch (error) {
    console.log(error);
  }
});
// METHOD PUT - edit a bear for one or more fields on database

bearRouter.put("/edit", (req, res) => {
  res.send("edit bear ");
});
// METHOD DELETE - delete data from  database

bearRouter.delete("/delete", (req, res) => {
  res.send("delete bear ");
});

module.exports = bearRouter;
