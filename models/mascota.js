const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const mascotaSchema =  new Schema ({
    //id: "",
    nombre: String,
    descripcion: String
})

//Crear modelo
const Mascota = mongoose.model('mascotas',mascotaSchema)

module.exports = Mascota;