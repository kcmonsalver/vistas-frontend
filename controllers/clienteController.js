const Cliente = require('../models/Cliente');


exports.buscarClientes = async(req,res) => {

try{
    const cliente = await Cliente.find();
    res.json(cliente)

}catch(error){
    console.log(error)
    res.status(500).send('hubo un error al buscar los clientes')
}

}

exports.agregarClientes = async(req,res) =>{

    try{

        let clientes;
        clientes = new Cliente (req.body)
        await clientes.save();
        res.send(clientes);


    } catch (error){
        console.log(error)
        res.status(500).send('hubo un error al agregar un cliente')
    }
}

exports.buscarCliente = async (req,res) => {

    try {
        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(400).json({msg: "no se encuentra el cliente con ese ID"})
            return
        }

        res.send(cliente);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar el cliente');
    }
}

exports.eliminarCliente = async (req,res)=>{

    try {
        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg: "no se encuentra el cliente con ese ID"})
            return
        }

        await Cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg: 'el cliente a sido eliminado'});
        return

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al eliminar el cliente');
    }

}

exports.actualizarCliente = async(req,res)=>{
    
    try {
        
    const {nombres, apellidos, documento, correo, telefono, direccion} = req.body
    let cliente = await Cliente.findById(req.params.id);

        if(!cliente){
            res.status(404).json({msg: 'el cliente no existe'});
        }else{
            cliente.nombres = nombres;
            cliente.apellidos = apellidos;
            cliente.documento = documento;
            cliente.correo = correo;
            cliente.telefono = telefono;
            cliente.direccion = direccion;

            cliente = await Cliente.findOneAndUpdate({_id: req.params.id}, cliente,{new:true});
            res.json(cliente);
            return
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al actualizar el cliente');
       return
    }
}