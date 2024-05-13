import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = 'http://localhost:5000/api/clientes/';

export const CompModificarClientes=()=>{

    const[nombres,setNombres] = useState('')
    const[apellidos,setApellidos] = useState('')
    const[documento,setDocumento] = useState('')
    const[correo,setCorreo] = useState('')
    const[telefono,setTelefono] = useState('')
    const[direccion,setDireccion] = useState('')
    const navigate= useNavigate();
    const {id} = useParams();

const modificarCliente= async(e) => {
    e.preventDefault()
    await axios.put(`${URL}${id}`,{
        nombres:nombres, apellidos:apellidos, documento:documento, correo:correo, telefono:telefono, direccion:direccion
    })
    navigate('/clientes')

}

useEffect(() => { 
    getClientesByID();
    //eslint-disable-next-line
},[]);

const getClientesByID = async() => {
    const res = await axios.get(`${URL}${id}` )
        setNombres(res.data.nombres)
        setApellidos(res.data.apellidos)
        setDocumento(res.data.documento)
        setCorreo(res.data.correo)
        setDireccion(res.data.direccion)
        setTelefono(res.data.telefono)
     
}
    return(
        
        <div>
        <h3>Formulario Modificar Clientes </h3>
        <form onSubmit={modificarCliente}>
            <div className="mb-3">
            <label className="form-label">Nombres</label>
            <input value={nombres} onChange= {(e) => setNombres(e.target.value)}
            type= 'text' className='form-control'/>
</div>


<div className="mb-3">
            <label className="form-label">Apellidos</label>
            <input value={apellidos} onChange= {(e) => setApellidos(e.target.value)}
            type= 'text' className='form-control'/>
</div>

<div className="mb-3">
            <label className="form-label">Documento</label>
            <input value={documento} onChange= {(e) => setDocumento(e.target.value)}
            type= 'number' className='form-control'/>
</div>

     <div className="mb-3">
            <label className="form-label">Correo</label>
            <input value={correo} onChange= {(e) => setCorreo(e.target.value)}
            type= 'text' className='form-control'/>
</div>

<div className="mb-3">
            <label className="form-label">telefono</label>
            <input value={telefono} onChange= {(e) => setTelefono(e.target.value)}
            type= 'number' className='form-control'/>
</div>

<div className="mb-3">
            <label className="form-label">Direccion</label>
            <input value={direccion} onChange= {(e) => setDireccion(e.target.value)}
            type= 'text' className='form-control'/>
</div>
<button type="submit" className="btn btn-dark"> <i className="fa-solid fa-share"></i>  </button>
        </form>


</div>
    )
}