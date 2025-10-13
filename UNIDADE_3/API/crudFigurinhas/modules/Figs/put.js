import Mfig from "../../models/SchemaFigurinha.js";

export async function updateFig(req, res) {
  try {
    const updatedFig = await Mfig.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedFig) {
      return res.status(404).json({ message: "Figurinha não encontrada" });
    }

    res.status(200).json({
      message: "Figurinha atualizada com sucesso!",
      figurinha: updatedFig,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar a Figurinha", error });
  }
}
