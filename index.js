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

//AJOUTER UN HELIPADDY
app.post('/Helipaddy', (req,res) => {
  Helipaddy.push(req.body)
  res.status(200).json(Helipaddy)
})

//SUPPRIMER UN HELIPADDY
app.delete('/Helipaddy/:id', (req,res) => {
  const id = parseInt(req.params.id)
  let Helipaddy = Helipaddy.find(Helipaddyr => Helipaddy.id === id)
  Helipaddy.splice(Helipaddy.indexOf(Helipaddy),1)
  res.status(200).json(Helipaddy)
})

//AFFICHER UN HELIPADDY SELON SON TRIP
app.get('/Helipaddy', (req,res) => {
  res.status(200).json(Helipaddy)
})

app.get('/Helipaddy/:id', (req,res) => {
  const trip = parseInt(req.params.trip)
  const Helipaddy = Helipaddy.find(Helipaddy => Helipaddy.id === id)
  res.status(200).json(Helipaddy) 
})

app.listen(8080, () => {
    console.log('Serveur à l ecoute')
  })
