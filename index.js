import express from "express";
import connectDb from "./db.js";
import cors from "cors";
import axios from "axios";
import UserModel from "./users.js";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .send("List de Cats - Connection to Front with Back and Data Bases");
});

app.get("/cats", (req, res) => {
  axios
    .get("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => res.status(200).send(err));
});

app.get("/users", async (req, res) => {
  try {
    setTimeout(() => {
      res.status(200).send(UserModel.find());
    }, [2000]);
  } catch (error) {
    res.status(500).send(error);
  }
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
