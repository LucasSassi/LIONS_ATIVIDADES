import MPet from "../models/schemaPets.js";

export async function createPet (req, res) {
  const { nome, especie, idade, status } = req.body;
try {
  if (!nome || !especie || !idade || !status) {
    return res.status(400).json({
      message: "Todos os campos são obrigatórios.",
    });
  }

  const newPet = new MPet({
    nome,
    especie,
    idade,
    status,
  });

  const saveProduct = await newPet.save();
  
  res.status(201).send(`Pet: ${newPet.nome} adicionado`, saveProduct);
}
catch (err){
  console.error(`O erro é: ${err}`)
}
};