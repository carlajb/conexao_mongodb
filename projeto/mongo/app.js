// Carregando modulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require("body-parser")
const app = express()
const admin = require("./routes/admin")
const path = require("path")
const mongoose = require("mongoose")
const session = require("express-session")
const flash = require ("connect-flash")
const { O_APPEND } = require('constants')

// configuracoes 
// sesao
app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
    secret: "cursodenode",
    resave: true,
    saveUninitialized: true
}))
app.use(flash())
//middleware
app.use((req, res, next)=>{
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    next()
})


//body Parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// handlebars

app.engine('handlebars', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars');
// mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/projeto_mongo").then(()=>{
    console.log("conectado ao mongo ..!!")
}).catch((err)=>{
    console.log("Erro ao se conectar: "+err)
})
//public
app.use(express.static(path.join(__dirname,"public")))

//Rotas 
app.use('/admin', admin)

//outros




const PORT = 5050
app.listen(PORT,()=>{
    console.log("Servidor rodando na porta 5050 ..!!!")
})