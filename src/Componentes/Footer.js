import React from "react";
import fisioterapia from '../Imaggenes/fisioterapia.jpg';

const Footer = ()=>{
return(
 
 
<div>
<div className="card-body">
    <h5 className="cart-tittle">EMCE</h5>
    <p className>monica monsalve </p>
    <img src ={fisioterapia} className="logo2" alt="logo"/>

</div>

<div className="card-fotter text muted">
    lunes - viernes
    </div>



</div>


)
}


export default Footer;