import Mfig from "../../models/SchemaFigurinha.js";
import MUser from "../../models/schemaUsers.js";

export async function deleteUser(req, res) {
  try {
    const idParaDeletar = req.params.id;

    const deletarUser = await MUser.findByIdAndDelete(idParaDeletar);

    const figsParaDeletar = await Mfig.deleteMany({ UserId: idParaDeletar });

    res
      .status(200)
      .send(`User deletado com sucesso!`, deletarUser, figsParaDeletar);
  } catch (err) {
    console.error("O erro é: ", err);
  }
}
