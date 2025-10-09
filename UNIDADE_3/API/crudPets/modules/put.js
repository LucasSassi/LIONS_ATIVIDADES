import MPet from "../models/schemaPets.js";

export async function updatePet(req, res) {
  try {
    const updatedPet = await MPet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedPet) {
      return res.status(404).json({ message: "Pet não encontrado" });
    }

    res.status(200).json({
      message: "Pet atualizado com sucesso!",
      pet: updatedPet,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar o Pet", error });
  }
}
