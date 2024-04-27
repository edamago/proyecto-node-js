const mysql = require("mysql2");
const con = mysql.createConnection({
    host: "localhost",
    user: "edamago",
    database: 'bd_miguel01',
    password: '1234',
    port: '3306'
});

con.connect(function(err){
    if(err){
        throw err;
    }
    else{
        console.log('Conexcion Exitosa!!!');
        const sql = "create table tbcliente (idcliente int AUTO_INCREMENT primary key, nombrecliente varchar(100) not null, direccion varchar(80) not null, dni varchar(8) not null)";
        con.query(sql, function(err, result){
            if(err) throw err;
            console.log('Tabla cliente creadad con exito!!!');
        });
    }
});