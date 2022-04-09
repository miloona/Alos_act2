const Joi = require('joi')



const Schema = {
    email: Joi.string().email().min(7),
    username:  Joi.string().min(7).max(50),
    name:  Joi.string().min(7).max(50),
    age:   Joi.number().positive().integer().min(30),
    country: Joi.string().min(5),
    picture:Joi.string(),
    email: Joi.string().email().min(7),
    phone: Joi.string().min(3),
    name_Helipaddy:  Joi.string().min(7).max(50),
    expertise: Joi.string(),
    Trip_price:   Joi.number().positive().integer(),
    number_of_trips:   Joi.number().positive().integer(),
    time_to_go: Joi.string(),
    go_to: Joi.string(),
    flying_hours: Joi.number().positive().integer().max(30),
    number_of_passengers: Joi.number().positive().integer().max(12),
    Quality: Joi.string(),
  
  
};

exports.validateTask = (tsk) => Joi.validate(tsk, Schema);
