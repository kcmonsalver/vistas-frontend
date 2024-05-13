import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const URL = 'http://localhost:5000/api/clientes/';

 export const CompClienteMostrar = () => {

    const [clientes, setClientes] = useState([])
    useEffect(() => { 
        getClientes();
    },[]);

    const getClientes = async () => {

        const datos = await axios.get(URL)
        setClientes(datos.data);
    }

    const eliminarClientes = async (id)=>{
        await axios.delete(`${URL}${id}`);
            getClientes();
        //eslint-disable-next-line
    }

    return (
<div className="container">
    <div className="row">
        <div className="col">
            <Link to = '/clientes/agregar' className="btn btn-primary mt-2 mb-2"><i className="fa-solid fa-user-plus"></i>    </Link>
                <table className="table">
                    <thead className="tableTheBg">
                        <tr>
                          <th>Nombres Cliente</th>
                          <th>Apellidos Cliente</th>
                          <th>Documento</th>
                          <th>Correo</th>
                          <th>Telefono</th>
                          <th>Direccion</th>
                        </tr>
                    </thead>  

                    <tbody>
                        {clientes.map((cliente, index)=> (
                            <tr key= {index}>
                            <td>{cliente.nombres}</td>
                            <td>{cliente.apellidos}</td>
                            <td>{cliente.documento}</td>
                            <td>{cliente.correo}</td>
                            <td>{cliente.telefono}</td>
                            <td>{cliente.direccion}</td>
                            <td>
                            <Link to= {`/clientes/actualizar/${cliente._id}`} className="btn btn-light mt-2 mb-2"><i className="fa-solid fa-repeat"></i>    </Link>
                            <button onClick={()=> eliminarClientes(cliente._id)} className="btn btn-danger mt-2 mb-2"><i className="fa-solid fa-trash-can-arrow-up"></i></button>
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
