import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = 'http://localhost:5000/api/servicios/';

export const CompModificarServicio=()=>{

    const[nombre,setNombre] = useState('')
    const[tipo,setTipo] = useState('')
    const[precio,setPrecio] = useState('')
    const[modalidad,setModalidad] = useState('')
    const navigate= useNavigate();
    const {id} = useParams();

    const modificarServicio= async(e) => {
        e.preventDefault()
        await axios.put(`${URL}${id}`,{
            nombre:nombre, tipo:tipo, precio:precio, modalidad:modalidad
        })
        navigate('/servicios')
}

useEffect(() => { 
    getServiciosByID();
    //eslint-disable-next-line
},[]);

const getServiciosByID = async() => {
    const res = await axios.get(`${URL}${id}` )
        setNombre(res.data.nombre)
        setTipo(res.data.tipo)
        setPrecio(res.data.precio)
        setModalidad(res.data.modalidad)
        
}
    return(
        
        <div>
        <h3>Formulario Modificar Servicios </h3>
        <form onSubmit={modificarServicio}>
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

<button type="submit" className="btn btn-dark"> <i className="fa-solid fa-share"></i>  </button>
        </form>


</div>
    )
}