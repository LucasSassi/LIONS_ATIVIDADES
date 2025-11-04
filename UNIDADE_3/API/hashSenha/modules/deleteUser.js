import MUser from "../models/schemaUser.js";

export async function deletarUser (req, res){
  try{
  const idParaDeletar = req.params.id
  const Users = MUser.find()
  
  const deletarUser = await Users.findByIdAndDelete(idParaDeletar)


  res.status(200).send(`User deletado com sucesso!`, deletarUser);
  }
  catch (err){
    console.error("O erro é: ", err)
  }
};

