const express = require("express");
var mysql = require('mysql');
var cors = require('cors');
const app = express();

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());
app.use(cors());
//Establecemos los prámetros de conexión
var conexion = mysql.createConnection({
    host:'198.50.211.237',
    user:'flashpoi_euro',
    password:'Javieroca123-',
    database:'flashpoi_remesafintech',
    charset : 'utf8mb4'
});

//Conexión a la database
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("¡Conexión exitosa a la base de datos!");
    }
});
app.get('/', function(req,res){
    res.send('Ruta INICIO');
});
//Mostrar todos los artículos
app.get('/api/users/binance_killers', (req,res)=>{
    conexion.query('SELECT * FROM senales_binance_killers', (error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
});

app.get('/api/users/russian', (req,res)=>{
    conexion.query('SELECT * FROM senales_russian', (error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
});

app.get('/api/users/bitcoinbullet', (req,res)=>{
    conexion.query('SELECT * FROM senales_bitcoinbullet', (error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
});

app.get('/api/users/latino_semanal', (req,res)=>{
    conexion.query('SELECT * FROM senales_latino_semanal', (error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
});

app.get('/api/users/latino_diario', (req,res)=>{
    conexion.query('SELECT * FROM senales_latino_diario', (error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
});

app.get('/api/users/latino_4h', (req,res)=>{
    conexion.query('SELECT * FROM senales_latino_4h', (error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
});



app.get("/", function (req, res) {
  res.send("WORKING yeas!!!!");
});

app.listen(process.env.PORT || 5000);
