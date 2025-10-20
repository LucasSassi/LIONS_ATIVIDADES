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

/*

DATABASE_URL="mongodb+srv://lions123:lions123@cluster0.kt8yoxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
token="36c5e560ecb4d0cac76541eb981301959079c85277db27f5da9e1357102f7468"

*/