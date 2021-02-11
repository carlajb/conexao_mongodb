// const express = require("express");
// const app = express();
// const handlebars = require ('express-handlebars');
// const bodyParser = require('body-parser');
// const Post = require('./models/Post');
// const { queryByDisplayValue, queryAllByAltText } = require("@testing-library/react");
// const  moment = require('moment')

// const path = require("path")


// app.engine('handlebars', handlebars({defaultLayout: 'main'}))
// app.set ('view engine', 'handlebars')
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())


// app.get('/cad', function(req,res){
//     Post.findAll().then(function(posts){
//         console.log(posts)
//        res.render('dadosbanco', {posts: posts})
       
//         // res.render('home', {posts: posts})
//     }).catch(function(error){console.log(error)})



// })



// //especificar local do css e da imagem
// app.use(express.static(__dirname +'/public'));



// app.get('/', function (req,res){

//     res.render('home/index');   
    
// });


// // app.get('/formulario', function(req,res){
// //     res.render('formulario')
// // })


// app.post('/add', function(req,res){
//     Post.create({
       
//         nome_produto : req.body.produto,
//         sobrenome : req.body.sobrenome,
//         quantidade_produto : req.body.email,
//         assunto : req.body.assunto,
//         mensagem : req.body.mensagem


//     }).then(function(){
//         res.redirect('/')
//     }).catch(function(erro){
//         res.send("falha no pedido "+ erro)
//     })
// })



// app.get('/deletar/:id', function(req,res){
//     Post.destroy({where: {'id': req.params.id}}).then(function(){
//         res.redirect('/cad')
//     }).catch(function(erro){
//         res.send("esta postagem nao existe!")
//     })
// })



