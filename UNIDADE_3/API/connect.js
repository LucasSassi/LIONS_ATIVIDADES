import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3030;
mongoose.connect(
  `mongodb+srv://LucasSassideSouza:12345@cluster0.kt8yoxu.mongodb.net`
);

mongoose.connection.once("open", () => {
  console.log("Conectado ao MongoDB");
});

mongoose.connection?.on("error", (err) => {
  console.error(`Erro ao conectar ao servidor, ${err}`);
});

app.use(express.json())