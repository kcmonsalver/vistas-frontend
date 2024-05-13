import React from "react";
import emce from '../Imaggenes/emce.PNG';

const MenuC = () => {
	return (
		<div>
			<nav className="d-flex flex-wrap justify-content-center py-3 mb-4 boder-bottom">
				<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img src={emce} className="LOGO" alt ="logo"/>
					<span className="fs-4">EMCE</span> </a>
				<ul className="nav nav-pills">
					<li className="nav-item">
						<a href="/" className="nav-link">Inicio</a>
					</li>
					<li className="nav-item">
						<a href="/servicios" className="nav-link">Servicios</a>
					</li>
					<li className="nav-item">
						<a href="/clientes" className="nav-link">Clientes</a>
					</li>
					<li className="nav-item">
						<a href="/Features" className="nav-link">Features</a>
					</li>
				</ul>
			</nav>
		
		</div>
	);
};

export default MenuC;