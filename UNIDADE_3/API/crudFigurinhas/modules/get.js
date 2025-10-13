import Mfig from "../models/SchemaFigurinha.js";

export async function listFig(req, res) {
  try {
    const filter = {};

    if (req.query.Numero) {
      filter.Numero = req.query.Numero;
    }

    if (req.query.Tema) {
      filter.Tema = req.query.Tema;
    }

    const figs = await Mfig.find(filter);

    if (figs.length === 0) {
      return res
        .status(404)
        .send("Nenhuma figurinha encontrada com esses critérios.");
    }

    res.status(200).json(figs);
    
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar as figurinhas", error });
  }
}