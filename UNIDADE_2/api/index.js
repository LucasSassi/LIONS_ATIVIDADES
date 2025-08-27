const express = require('express')
const port = 8080
const app = express()
const a = 4
const b = 2

console.log(new Date())

app.use(express.json());

app.post('/soma2', (req, res) => {
    const {numero1, numero2} = req.body 
    res.send(`A soma de ${numero1} + ${numero2} = ${numero1 + numero2}`)
})

app.get('/soma', (req, res) => {
    res.send(`A soma de ${a} + ${b} = ${a + b}`)
})

app.get('/subtracao', (req, res) => {
    res.send(`A subtracao de ${a} - ${b} = ${a - b}`)
})

app.get('/divisao', (req, res) => {
    res.send(`A divisao de ${a} / ${b} = ${a / b}`)
})

app.get('/multiplicacao', (req, res) => {
    res.send(`A multiplicacao de ${a} * ${b} = ${a * b}`)
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}!`)
})