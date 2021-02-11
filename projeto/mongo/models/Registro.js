const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Registro = new Schema({
    nome:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

mongoose.model("registros", Registro)