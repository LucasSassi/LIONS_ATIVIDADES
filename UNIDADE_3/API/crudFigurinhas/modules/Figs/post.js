import Mfig from "../../models/SchemaFigurinha.js";

export async function createFig(req, res) {
  const { Numero, Tema, UserId } = req.body;
  try {
    if (!Numero, !Tema, !UserId) {
      return res.status(400).json({
        message: "Todos os campos são obrigatórios.",
      });
    }

    const newFig = new Mfig({
      UserId,
      Numero,
      Tema,
    });

    const saveProduct = await newFig.save();

    res.status(201).send(`Figurinha: ${newFig.Numero} adicionada`, saveProduct);
  } catch (err) {
    console.error(`O erro é: ${err}`);
  }
}
