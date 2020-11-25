const { Router } = require('express');
const router = Router();
const { signin, signup, renderSingUpForm, renderSinginForm, loguot } = require('../controllers/users.controller')
const { isAuthenticated}=require('../helpers/auth');

router.get('/user/signup',renderSingUpForm);

router.post('/user/signup',signup);

router.get('/user/signin',renderSinginForm);

router.post('/user/signin',signin);



router.get('/user/logout',loguot);




module.exports = router;