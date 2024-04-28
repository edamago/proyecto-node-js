const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    //res.send("Mi respuesta desde express")
    res.render("index",
      {
        titulo: "mi titulo dinamico",
        nombre: "Daniel"
      })
  })
  
  router.get("/servicio",(req,res)=>{
    //res.send("Ruta de servicio")
    res.render("servicios",{tituloServicios: "Mensaje dinámico servicios"})
  })

  module.exports = router