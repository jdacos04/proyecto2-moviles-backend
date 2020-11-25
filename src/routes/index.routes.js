const {Router} = require('express');
const router = Router();

const{renderIndex,
renderPerfil}= require('../controllers/index.controller');
const { isAuthenticated}=require('../helpers/auth');
router.get('/', renderIndex)

router.get('/perfil',renderPerfil)

module.exports = router;