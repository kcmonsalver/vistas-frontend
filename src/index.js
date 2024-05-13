const express  = require('express');
const conectarBD = require('../config/db');
const cors =require('cors');

const app = express();


conectarBD();
app.use(cors());

app.use(express.json());
app.use('/api/clientes', require('../routes/rutas'));
app.use('/api/servicios', require('../routes/routesSer'));


app.listen(5000,() => {
    console.log('el servidor esta conectado= http://localhost:5000/ ')
})

app.get('/',(req,res)=>{
    res.send('Hola Mundo desde la web');
})