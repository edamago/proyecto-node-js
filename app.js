const express = require("express");
const app=express();

const bodyParser = require("body-parser")

require("dotenv").config()

const port= process.env.PORT || 3000;

// parse application
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json()) 

// Conexion a base de datos
const mongoose = require('mongoose');



const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.sbhm3a3.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=Cluster0`;
//const uri = `mongodb+srv://${user}:${password}@cluster0.sbhm3a3.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri)
        .then(()=> console.log("Base de datos conectada mongodb"))
        .catch((error)=>console.log(error))

const Cat = mongoose.model('Cat', { name: String });


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

