const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Registro")
const registro = mongoose.model("registros")



router.get('/produtos',(req, res)=>{
    res.render("admin/produtos")
})

router.get('/',(req, res)=>{
    res.render("admin/index")
})

router.get('/posts', (req, res)=>{
    res.send("pagina de posts")
})


// ..find().lean().then
 router.get("/registros", (req, res)=>{
     registro.find().lean().then((registros)=>{
        res.render("admin/registros", {registros: registros})
     }).catch((err)=> {
         req.flash("error_msg", "houve um erro ao listar os registros")
         res.redirect("/admin")
        })

   
})
 router.get('/registros/add', (req, res)=>{
    res.render("admin/addregistros")
 })
 router.post("/registros/novo", (req, res)=> {

        const novoRegistro = {
            nome: req.body.nome,
            email: req.body.email
        }
        new registro(novoRegistro).save().then(()=> {
            console.log("registro salvo")
            req.flash("success_msg", "registro com sucesso")
            res.redirect("/admin/registros")
        }).catch((err)=>{
            req.flash ("error_msg", "houve erro ao tentar novo registro")
            console.log("Nao foi possivel realizar o registro!!" +err)
        })


        // router.post('/registros/deletar/:id', (req,res) => {
        //     registro.findOneAndDelete({_id: req.params.id}).then(()=> {

            // app.get('/deletar/:id', function(req,res){
            //     Post.destroy({where: {'id': req.params.id}}).then(function(){
            //         res.redirect('/cad')
            //     }).catch(function(erro){
            //         res.send("esta postagem nao existe!")
            //     })
            
            router.post('/registros/deletar/:id', eAdmin, (req, res) => {
              registro.findOneAndDelete({_id: req.body.id}).then(()=>{
                  req.flash('success_msg', `registro excluido com sucesso`)
                  res.redirect('/admin/registros')
                console.log("deletado com sucesso!!")
                
            }).catch((err) => {
                req.flash('error_msg', `erro ao tentar deletar registro: ${err}`)
                res.redirect('/admin/registros')
                 console.log("erro ao deletar!!!!!!!!!!!!!!!" +err)
            
            });
        });


    
})

module.exports = router






// router.get("/registros", (req, res)=>{
//     res.render("admin/registros")
// })
// router.get('/registros/add', (req, res)=>{
//     res.render("admin/addregistros")
// })
// router.post("/registros/novo", (req,res)=>{

//     var erros = []

//     if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
//         erros.push({texto: "Nome invalido"})
//     }
//     if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
//         erros.push({texto: "Email invalido"})
//     }

//     if(req.body.nome.length <= 4){
//         erros.push({texto: "Nome deve conter minimo de 5 letras"})
//     }

//     if(erros.length > 0){
//         res.render("admin/addregistros",{erros: erros})
//     }
//     else{