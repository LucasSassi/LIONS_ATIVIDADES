import MEstudante from "../../schemaEstudantes.js";

export async function deletarEstudantes (req, res){
  try{
  const idParaDeletar = req.params.id
  const estudantes = MEstudante.find()
  
  const deletarEstudante = await estudantes.findByIdAndDelete(idParaDeletar)


  res.status(200).send(`Estudante deletado com sucesso!`, deletarEstudante);
  }
  catch (err){
    console.error("O erro é: ", err)
  }
};

