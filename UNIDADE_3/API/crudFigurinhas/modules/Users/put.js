import MUser from "../../models/schemaUsers.js";

export async function updateFig(req, res) {
    try {
      const updatedFig = await MUser.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
  
      if (!updatedFig) {
        return res.status(404).json({ message: "Usuario não encontrada" });
      }
  
      res.status(200).json({
        message: "Usuario atualizada com sucesso!",
        figurinha: updatedFig,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar o usuario", error });
    }
  }
  