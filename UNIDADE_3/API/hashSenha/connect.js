import dotenv from 'dotenv';
dotenv.config()
import express from "express";
import { router } from "./routes.js";
import mongoose from "mongoose";

const app = express();
const port = 2323;


mongoose.connect(process.env.DATABASE_URL)

mongoose.connection.once("open", () => {
  console.log("Connected to databank");
});

mongoose.connection?.on("error", (err) => {
  console.error(`Something went wrong trying to connect to databank, ${err}`);
});

app.use(express.json())


app.use(express.json());
console.log("cheguei")
app.use(router);


app.listen(port, () => {
  console.log(`Server working: http://localhost:${port}`);
});
