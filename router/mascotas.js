const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.render("mascotas",{
        arrayMascotas: [
            {id: '1', nombre: "Lola", descripcion: "Perro hembra pequaña"},
            {id: '2', nombre: "Chochi", descripcion: "Perro hembra negra"},
            {id: '3', nombre: "Chata", descripcion: "Perro hembra traviesa"}
        ]
    })
})

module.exports = router