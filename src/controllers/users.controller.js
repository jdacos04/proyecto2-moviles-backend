const { use } = require("passport");
const User = require('../models/User');
const passport = require("passport");
userCtrl={};

userCtrl.renderSingUpForm = (req,res) =>{
    res.render('user/signup');
}

userCtrl.signup =async (req,res)=>{
    let errors = []
    console.log(req.body)
   const {name, email, password, confirm_password} = req.body;
   if(password != confirm_password){
       console.log('las contrasenas no son iguales')

   }
   if(password.length<4){
       console.log('la contrasena debe tener mas de 4 caracteres')
   }
   if(errors.length>0){
       res.render('user/signup',{
           errors,
           name,
           email,
       })
   }else{
     const emailUser = await  User.findOne({email:email});
     if(emailUser){
        console.log("el usuarion ya esta registrado ")
         res.redirect('/user/signup');
     }else{
         const newUser = new User({name, email, password});
         newUser.password = await newUser.encryptPassword (password);
         await newUser.save();
        res.redirect('/user/signin');
     }
     console.log(req.body)
       
   }
        
}

userCtrl.renderSinginForm = (req,res) =>{
    res.render('user/signin');
}


userCtrl.signin=passport.authenticate('local',{
    failureRedirect:'/user/signin',
    successRedirect:'/user/home',
    failureFlash:true,
});

0
userCtrl.loguot = (req,res)=>{
    req.logout();
    req.flash("success_msg",'secion cerrada');
    res.redirect('/');
}


module.exports = userCtrl;