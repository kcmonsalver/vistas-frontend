<<<<<<< HEAD
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
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> 310e556 (initial commit)
