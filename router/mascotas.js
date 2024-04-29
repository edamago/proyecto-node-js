const express = require("express")
const router = express.Router()

const Mascota = require("../models/mascota")


router.get("/",async (req,res)=>{

    try {
        const arrayMascotasDB = await Mascota.find()
        //console.log(arrayMascotasDB)    
        res.render("mascotas",{
            arrayMascotas: arrayMascotasDB
            /*arrayMascotas: [
                {id: '1', nombre: "Lola", descripcion: "Perro hembra pequaña"},
                {id: '2', nombre: "Chochi", descripcion: "Perro hembra negra"},
                {id: '3', nombre: "Chata", descripcion: "Perro hembra traviesa"}
            ]*/
        })

    } catch (error) {
        console.log(error)   
    }

    
})

router.get("/crear",(req,res)=>{
    res.render("crearmascota")
})

router.post("/",async(req,res)=>{
    const body = req.body
    try {
        //const mascotaDB = new Mascota(body)
        //await mascotaDB.save()
        //console.log("Mascota creada: ",mascotaDB)
        
        await Mascota.create(body)
        
        res.redirect("/mascotas")
    } catch (error) {
        console.log(error)
    }
})

router.get("/:id",async(req,res)=>{
    const id = req.params.id
    try {
        const mascotaDB = await Mascota.findOne({_id: id})
        console.log(mascotaDB)

        res.render("detallemascota",{
            mascota : mascotaDB,
            error : false
        })

    } catch (error) {
        console.log(error)
        res.render("detallemascota",{
            error : true,
            mensaje : "No se encuentra el id seleccionado"
        })
    }
})

module.exports = router