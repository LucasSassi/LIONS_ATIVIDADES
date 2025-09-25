import MLivro from "../../schemaLivro.js";

export async function deletarLivros (req, res){
  try{
  const idParaDeletar = req.params.id
  
  const deletarLivro = await MLivro.findByIdAndDelete(idParaDeletar)


  res.status(200).send(`Livro deletado com sucesso!`, deletarLivro);
  }
  catch (err){
    console.error("O erro é: ", err)
  }
};


