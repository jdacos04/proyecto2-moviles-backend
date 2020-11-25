const indexCtrl={};


indexCtrl.renderIndex =(req,res) =>{
    res.render('index')
};

indexCtrl.renderPerfil =(req,res)=>{
    res.render('images/perfil')

};

module.exports = indexCtrl;