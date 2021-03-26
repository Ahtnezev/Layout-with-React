import React from 'react'

const Menu = () => {
    return(
        <div className="menu">
            <ul className="menu-items">
                <li>
                    <a href="index.html">Inicio</a>
                </li>
                <li>
                    <a href="index.html">Nosotros</a>
                </li>
                <li>
                    <a href="index.html">Tienda</a>
                </li>
                <li>
                    <a href="index.html">Tratamientos</a>
                </li>
                <li>
                    <a href="index.html">Mi Cuenta</a>
                </li>
                <li>
                    <a href="index.html"> <i className="fas fa-search"></i> </a>
                </li>
                <li>
                    <a href="index.html"> <i className="fas fa-shopping-cart"></i> </a>
                </li>
            </ul>
        </div>
    )
}

export default Menu