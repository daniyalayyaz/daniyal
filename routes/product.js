var express = require('express');
let {Product,validateProduct} = require('../model/product');
let {validateProd}=require('../middleware/validateProducts');
let {sessioncheck,sessioncheckAdmin}=require('../middleware/sessioncheck');
var router = express.Router();
const nodemailer = require("nodemailer");
/* GET home page. */
router.get('/Book',sessioncheckAdmin, async function(req, res, next) {  // Admin view
  let Tour=await Product.find();
 
  
  res.render('productlis',{Tour});
});





router.get('/Booking',sessioncheck, async function(req, res, next) {  // Admin view
 
  
  res.render('Booking');
});

















router.get('/Contact', async function(req, res, next) {  // Admin view
 
  
  res.render('Contact');
});







 








router.post('/Contactsent', async function(req, res, next) {
  var email=req.body.Email;
  var Name=req.body.Name;
  // product.Prouductname=req.body.Prouductname  when we write different names then use this
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      port:  2525,
      secure: false, // true for 465, false for other ports
      auth: {
         user:"SP18-BSE-016@CUILAHORE.EDU.PK", // generated ethereal user
        pass:"starlet7808", // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "Daniyal Tour System", // sender address
      to: email, // list of receivers
      subject: "Hello"+Name, // Subject line
      text: "Your request is Submitted", // plain text body
      html: "Your request is Submitted", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);
  
   
  
   res.redirect('/');
 });


// async..await is not allowed in global scope, must use a wrapper






router.post('/BookingAdd',sessioncheck,validateProd, async function(req, res, next) {
 // product.Prouductname=req.body.Prouductname  when we write different names then use this

  let product=new Product(req.body);
  await product.save();
  res.redirect('/');
}

);


 
module.exports = router;
