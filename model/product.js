var mongoose = require("mongoose");
var productscheme =mongoose.Schema({
CourseName:String,
Courseid:String,
CourseDuration:String,
CourseFee:String,
Prouductname:{
    type:String,
    lowercase: true,
   
            
}
});
const Products=mongoose.model("firstcrud",productscheme);
module.exports = Products;