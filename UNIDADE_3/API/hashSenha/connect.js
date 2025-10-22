import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { router } from "./routes.js";
import mongoose from "mongoose";

const app = express();
const port = 2323;

mongoose.connect(process.env.DATABASE_URL);

mongoose.connection.once("open", () => {
  console.log("Connected to databank");
});

mongoose.connection?.on("error", (err) => {
  console.error(`Something went wrong trying to connect to databank, ${err}`);
});

app.use(express.json());

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server working: http://localhost:${port}`);
});

/*

DATABASE_URL="mongodb+srv://lions123:lions123@cluster0.kt8yoxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
JWT_SECRET="e9c23519647e3abc7695ea0f3c112b203a5c756dc854714657703839244b713f"

*/
