const mysql = require('mysql2');
const conexion=mysql.createConnection({
    host: "localhost",
    user: "edamago",
    database: "bd_miguel",
    password: "1234",
    port: "3306"
})

conexion.connect(function(err){
    if(err){
        throw err
    }
    else console.log('Conexion exitosasa')
    conexion.query("create database bd_miguel01",function(err,res){
        console.log("La base de datos bd_miguel01 fue creada exitosamente")
    })
})