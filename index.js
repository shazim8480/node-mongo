const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(cors());
// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello this is Shazim who is running node!");
});

//install npm-nodemon to automatically monitor changes//
// rides/car has to be added after the url "localhost/port" part
app.get("/rides/car", (req, res) => {
  res.send({ ride: "car", seats: 4, fare: "$30" });
});
// this is how you can create multiple api//

//creating dynamic api// //upon calling id by serial, users will show according to the "users" array in browser// // id will be used as dynamic params//
const users = ["jamie", "anderson", "malice", "hanna", "ren", "shield"];
app.get("/users/:id", (req, res) => {
  //   console.log(req.params);
  const id = req.params.id;
  const name = users[id];
  res.send({ id, name });
});

//post //
// then use postman to post data//
// use bodyParser to solve the error on postman//
app.post("/addProduct", (req, res) => {
  //   send data to postman in body section //
  //   console.log("post req sent", req.body);

  //without postman //

  //save to database
  const product = req.body;
  product.id = 15;
  res.send(product);
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
