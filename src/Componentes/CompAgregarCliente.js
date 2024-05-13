import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL = 'http://localhost:5000/api/clientes/';

export const CompAgregarClientes=()=>{

    const[nombres,setNombres] = useState('')
    const[apellidos,setApellidos] = useState('')
    const[documento,setDocumento] = useState('')
    const[correo,setCorreo] = useState('')
    const[telefono,setTelefono] = useState('')
    const[direccion,setDireccion] = useState('')
    const navigate= useNavigate();

const guardarCliente= async(e) => {
    e.preventDefault()
    await axios.post(URL,{
        nombres:nombres, apellidos:apellidos, documento:documento, correo:correo, telefono:telefono, direccion:direccion
    })
    navigate('/clientes')

}

    return(
        
        <div>
                <h3>Formulario Guardar Clientes </h3>
                <form onSubmit={guardarCliente}>
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
       <button type="submit" className="btn btn-dark"> <i className="fa-solid fa-floppy-disk"></i>  </button>
                </form>
        

        </div>
    )
}