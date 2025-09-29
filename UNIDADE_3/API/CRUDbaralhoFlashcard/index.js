import dotenv from 'dotenv';
dotenv.config()
import express from "express";
import { router } from "./routes.js";
import mongoose from "mongoose";

const app = express();
const port = 8080;


mongoose.connect(process.env.DATABASE_URL)

mongoose.connection.once("open", () => {
  console.log("Conectado ao MongoDB");
});

mongoose.connection?.on("error", (err) => {
  console.error(`Erro ao conectar ao servidor, ${err}`);
});

app.use(express.json())


app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
