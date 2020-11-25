const express = require('express');
const path = require('path');
const morgan =require('morgan');
const session = require('express-session');
const passport=require('passport');
const cors  = require('cors');

//incializacion 
const app =  express();
require('./config/passport');
//configuraciones
app.set('port', process.env.PORT || 4000);


//midelwares 
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(express.json());
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());



//variables globales 
app.use((req, res, next)=>{
res.locals.susccess_msg =req.flash('success_msg');
res.locals.success_msg = req.flash('error_msg');
res.locals.error= req.flash('error');
res.locals.user= req.user||null;
next();

})




//rutas
app.use(require('./routes/index.routes'));
app.use(require('./routes/users.routes'));


module.exports = app;