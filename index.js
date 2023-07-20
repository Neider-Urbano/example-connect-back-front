import express from "express";
import connectDb from "./db.js";
import cors from "cors";
import UserModel from "./users.js";
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res
    .status(200)
    .send("List de Cats - Connection to Front with Back and Data Bases");
});

app.get("/cats", (req, res) => {
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((response) => response.json())
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(200).send(err));
});

app.get("/users", async (req, res) => {
  const users = await UserModel.find();
  res.status(200).send(users);
});

app.listen(port, () => {
  connectDb()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(`App listening on port ${port}`);
});
