const express = require('express')
const app = express()
const Helipaddy = require('db.json')

// Middleware
app.use(express.json())

app.get('/Helipaddy', (req,res) => {
    res.status(200).json(Helipaddy)
})

app.get('/Helipaddy/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const Helipaddy = Helipaddy.find(Helipaddy => Helipaddy.id === id)
    res.status(200).json(Helipaddy)
})

//AJOUTER UN Helipaddy
app.post('/Helipaddy', (req,res) => {
  Helipaddy.push(req.body)
  res.status(200).json(Helipaddy)
})

//SUPPRIMER UN Helipaddy
app.delete('/Helipaddy/:id', (req,res) => {
  const id = parseInt(req.params.id)
  let Helipaddy = Helipaddy.find(Helipaddyr => Helipaddy.id === id)
  Helipaddy.splice(Helipaddy.indexOf(Helipaddy),1)
  res.status(200).json(Helipaddy)
})

//AFFICHER UN Helipaddy 
app.get('/Helipaddy', (req,res) => {
  res.status(200).json(Helipaddy)
})

app.get('/Helipaddy/:id', (req,res) => {
  const groupe_sanguin = parseInt(req.params.groupe_sanguin)
  const Helipaddy = Helipaddy.find(Helipaddy => Helipaddy.id === id)
  res.status(200).json(Helipaddy) 
})

app.listen(8080, () => {
    console.log('Serveur à l ecoute')
  })
