import MPet from "../models/schemaPets.js";

export async function deletePet(req, res){
  try {
    const idParaDeletar = req.params.id;

    const deletarPet = await MPet.findByIdAndDelete(idParaDeletar);

    res.status(200).send("Pet deletado com sucesso!", deletarPet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno no servidor." });
}

}