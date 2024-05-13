import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const URL = 'http://localhost:5000/api/servicios/';

 export const CompServicioMostrar = () => {

    const [servicios, setServicios] = useState([])
    useEffect(() => { 
        getServicios();
    },[]);

    const getServicios = async () => {

        const datos = await axios.get(URL)
        setServicios(datos.data);
    }

    const eliminarServicio = async (id)=>{
        await axios.delete(`${URL}${id}`);
            getServicios();
        //eslint-disable-next-line
    }

    return (
<div className="container">
    <div className="row">
        <div className="col">
            <Link to = '/servicios/agregar' className="btn btn-primary mt-2 mb-2"><i className="fa-solid fa-user-plus"></i>    </Link>
                <table className="table">
                    <thead className="tableTheBg">
                        <tr>
                          <th>Nombre Servicio</th>
                          <th>Tipo Servicio</th>
                          <th>Precio</th>
                          <th>Modalidad</th>
                        
                        </tr>
                    </thead>  

                    <tbody>
                        {servicios.map((servicio, index)=> (
                            <tr key= {index}>
                            <td>{servicio.nombre}</td>
                            <td>{servicio.tipo}</td>
                            <td>{servicio.precio}</td>
                            <td>{servicio.modalidad}</td>
                    
                            <td>
                            <Link to= {`/servicios/actualizar/${servicio._id}`} className="btn btn-light mt-2 mb-2"><i className="fa-solid fa-repeat"></i>    </Link>
                            <button onClick={()=> eliminarServicio(servicio._id)} className="btn btn-danger mt-2 mb-2"><i className="fa-solid fa-trash-can-arrow-up"></i></button>
                            </td>
                            </tr>
                        ))}
                      
                    </tbody>
           </table>
         </div>
    </div>
</div>

    )

}
