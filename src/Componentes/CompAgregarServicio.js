import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL = 'http://localhost:5000/api/servicios/';

export const CompAgregarServicios=()=>{

    const[nombre,setNombre] = useState('')
    const[tipo,setTipo] = useState('')
    const[precio,setPrecio] = useState('')
    const[modalidad,setModalidad] = useState('')
   
    const navigate= useNavigate();

const guardarServicio= async(e) => {
    e.preventDefault()
    await axios.post(URL,{
        nombre:nombre, tipo:tipo, precio:precio, modalidad:modalidad
    })
    navigate('/servicios')

}

    return(
        
        <div>
                <h3>Formulario Guardar Servicios </h3>
                <form onSubmit={guardarServicio}>
                    <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input value={nombre} onChange= {(e) => setNombre(e.target.value)}
                    type= 'text' className='form-control'/>
       </div>

       
       <div className="mb-3">
                    <label className="form-label">Tipo</label>
                    <input value={tipo} onChange= {(e) => setTipo(e.target.value)}
                    type= 'text' className='form-control'/>
       </div>

       <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input value={precio} onChange= {(e) => setPrecio(e.target.value)}
                    type= 'number' className='form-control'/>
       </div>

             <div className="mb-3">
                    <label className="form-label">Modalidad</label>
                    <input value={modalidad} onChange= {(e) => setModalidad(e.target.value)}
                    type= 'text' className='form-control'/>
       </div>
    
       <button type="submit" className="btn btn-dark"> <i className="fa-solid fa-floppy-disk"></i>  </button>
                </form>
        

        </div>
    )
}