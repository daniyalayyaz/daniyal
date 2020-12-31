function sessioncheck(req,res,next){
   if(req.session.reg){
next();
   }
   
      else{
       return res.redirect("/users/Login");
      }
   
}
function sessioncheckAdmin(req,res,next){
   if(req.session.adm){
next();
   }
   
      else{
    
       return res.redirect("/users/Login");
      }
   }

module.exports.sessioncheck=sessioncheck;
module.exports.sessioncheckAdmin=sessioncheckAdmin;