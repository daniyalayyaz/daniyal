var mongoose = require("mongoose");
var Joi = require("@hapi/joi");
var productscheme =mongoose.Schema({
Name:String,
Email:String,
TourType:String,
ProductName:{
    type:String,
    lowercase: true,
   
            
}
});
const Products=mongoose.model("Courses",productscheme);

function validateProduct(data){
    const scheme =Joi.object({
        Name:Joi.string().min(3).max(16).required(),
        Email:Joi.string().email({ tlds: { allow: ['com', 'net','gmail']} }),
        TourType:Joi.string().required(),
        // Joi.string().email({ tlds: { allow: ['com', 'net','gmail']} }),
    });
    return scheme.validate(data);
}
module.exports.Product = Products;
module.exports.validateProduct = validateProduct;