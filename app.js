/*
const http = require("http");

const port = 3000//process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Estoy respondiendo a la solicitud v1</h1>");
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
*/
const express = require("express");
const app=express();
const port= process.env.port || 3000;

//motor de plantillas
app.set("view engine","ejs")
app.set("views",__dirname + "/views")

app.get("/",(req,res)=>{
  //res.send("Mi respuesta desde express")
  res.render("index",
    {
      titulo: "mi titulo dinamico",
      nombre: "Daniel"
    })
})

app.get("/servicio",(req,res)=>{
  //res.send("Ruta de servicio")
  res.render("servicios",{tituloServicios: "Mensaje dinámico servicios"})
})

//Ruta estática
app.use(express.static(__dirname+"/public"))

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

