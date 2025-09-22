import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3030;
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.kt8yoxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
);

mongoose.connection.once("open", () => {
  console.log("Conectado ao MongoDB");
});

mongoose.connection?.on("error", (err) => {
  console.error(`Erro ao conectar ao servidor, ${err}`);
});
