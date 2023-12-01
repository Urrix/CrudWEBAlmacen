const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
 
const app = express();
const port = 3000;
 
// Configurar el middleware de análisis del cuerpo para analizar las solicitudes de incoming
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
// Configurar la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'refaccionaria'
});
 
// Realizar la conexión a la base de datos MySQL
connection.connect();

//Api para mostrar todos los clientes
app.get('/api/dataClientes', (req, res) => {
    const query='SELECT * FROM clientes';
    connection.query(query, (error, results)=> {
        if(error) {
            throw error;
        }
        res.send(results);;
    });
});
 
// Api para los datos de servicio
app.get('/api/dataServicio', (req, res) => {
    const query = 'SELECT * FROM servicios';
  
    connection.query(query, (error, results) => {
        if (error) {
            throw error;
        }
 
        res.send(results);
    });
});

//Api para los datos de factura
app.get('/api/dataFacturas',(req, res)=> {
    const query='SELECT * FROM facturas';
    connection.query(query, (error, results)=> {
        if(error) {
            throw error;
        }
        res.send(results);
    });
});
//Api para los datos de inventario
app.get('/api/dataInventario', (req, res)=> {
    const query='SELECT refacciones.*, proveedor.IDproveedor, proveedor.Nombre AS pnombre FROM proveedor, refacciones WHERE proveedor.IDproveedor=refacciones.IDproveedor';
    connection.query(query, (error, results) => {
        if(error) {
            throw error;
        }
        res.send(results);
    })
})
 
// Escuchar en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor Express.js en funcionamiento en el puerto ${port}`);
});