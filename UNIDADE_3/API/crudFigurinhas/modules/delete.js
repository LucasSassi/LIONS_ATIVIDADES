import Mfig from "../models/SchemaFigurinha.js";

export async function deleteFig(req, res){
  try {
    const idParaDeletar = req.params.id;

    const deletarFig = await Mfig.findByIdAndDelete(idParaDeletar);

    res.status(200).send("Figurinha deletada com sucesso!", deletarFig);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno no servidor." });
}

}