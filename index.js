var express = require('express')
const annonces_ventes = require('./db.json')

//morgan 
var logger = require("morgan");
const bodyParser = require('body-parser');

var app = express()
const utils = require('./task-Schema.js');

//morgan (dev)
app.use(logger('dev'));

app.use(express.json())
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { body, validationResult } = require('express-validator');
///POST 
///express-validator
//middlwares

app.post('/Helipaddy', 
///Sanitization

body('email').isEmail().normalizeEmail(),
body('username').not().trim().escape(),   
body('name').isString()
body('age').isInt(),
body('country').isString(),
body('picture').isInt(),
body('email').isEmail().normalizeEmail(),
body('phone').isMobilePhone(), 
body('name_Helipaddy').isString()
body('expertise').isIn(['Beginner', 'professional']),
body('Trip_price').isCurrency(),
body('number_of_trips').isInt(),
body('time_to_go').isDate(),
body('go_to').isString(),    
body('flying_hours').isInt(),  
body('number_of_passengers').isInt(),  
body('Quality').isIn(['Good', 'Normal','Bad']),
    

(req, res, next)=>  {
    let content = req.body;
    const errors = validationResult(req);
// test api test la condition Il y aura que le id et le name Obligatoirement Exister
    if (!content.id && !content.name) { 
        return res.status(400).send("Helipaddy not created");

    }
    ////fin

    
    
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
    } 
    const Helipaddy = {
        id: Helipaddy.length + 1,
        email: req.body.email,
        username: req.body.username,
        name: req.body.name,
        age: req.body.age,
        country: req.body.country,

       picture: req.body.picture,
        email: req.body.email,
        phone: req.body.phone,
        name_Helipaddy: req.body.name_Helipaddy,
        expertise: req.body.expertise,
        Trip_price: req.body.Trip_price,
        number_of_trips: req.body.number_of_trips,
        time_to_go: req.body.time_to_go,
        go_to: req.body.go_to,
        flying_hours: req.body.flying_hoursl,
        number_of_passengers: req.body.number_of_passengers,
        Quality: req.body.Quality

    }
    
    Helipaddy.push(Helipaddy);
    res.status(200).json(Helipaddy)
    
});
/// GET 
app.get('/Helipaddy', (req,res,next) => {
    res.status(200).json(Helipaddy)
})

/// GET  BY ID
app.get('/Helipaddy/:id', (req,res,next) => {


  
        const id = parseInt(req.params.id)

        const Helipaddy = Helipaddy.find(Helipaddy => Helipaddy.id === id)
        if(Helipaddy){

        res.status(200).json(Helipaddy)
    }
    else {
        return res.status(404).json("Helipaddy_not_found");

    }
  
})


///PUT
app.put('/Helipaddy/:id',(req, response) => {
    const taskId = req.params.id;
    const task = aHelipaddy.find(task => task.id === parseInt(taskId));
    if(!task) return response.status(404).send("The Helipaddy with the provided ID does not exist.");

    const { error } = utils.validateTask(req.body);
    if(!error) {
        task.email: req.body.email,
        task.username: req.body.username,
        task.name: req.body.name,
        task.age: req.body.age,
        task.country: req.body.country,

       task.picture: req.body.picture,
        task.email: req.body.email,
        task.phone: req.body.phone,
        task.name_Helipaddy: req.body.name_Helipaddy,
        task.expertise: req.body.expertise,
        task.Trip_price: req.body.Trip_price,
        task.number_of_trips: req.body.number_of_trips,
        task.time_to_go: req.body.time_to_go,
        task.go_to: req.body.go_to,
        task.flying_hours: req.body.flying_hoursl,
        task.number_of_passengers: req.body.number_of_passengers,
        task.Quality: req.body.Quality
     return response.status(200).send(task);
    }
    else {

         response.status(400).send("non_PUT");
    }
  
    
 

  
  });
///delete
app.delete('/Helipaddy/:id', (req,res,next) => {
    const id = parseInt(req.params.id)
    let Helipaddy = Helipaddy.find(Helipaddy => Helipaddy.id === id)
    Helipaddy.splice(Helipaddy.indexOf(Helipaddy),1)
    if(Helipaddy){

        res.status(200).json(Helipaddy)
    }
    else {
        return res.status(400).json("Helipaddy");

    }
})

// catch 404 and forward to error handler

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})


// error handler

app.use((error, req, res, next) => {
      // render the error page

    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})

module.exports = app;
