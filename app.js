const express = require("express");
const app=express();
const port= process.env.PORT || 3000;

//motor de plantillas
app.set("view engine","ejs")
app.set("views",__dirname + "/views")

//Ruta estática
app.use(express.static(__dirname+"/public"))

//Rutas web
app.use("/",require("./router/rutasweb")) 
app.use("/mascotas",require("./router/mascotas"))

//En caso no encuentre las rutas
app.use((req,res,next)=>{
  //res.status(404).sendFile(__dirname+"/public/404.html")
  res.status(404).render("404",
  {
    titulo: "Página 404",
    descripcion: "Pagina no encontrada"
  })
})

app.listen(port,()=>{
  console.log("Escuchando desde puerto ", port)
})

