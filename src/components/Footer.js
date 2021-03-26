import React from 'react'
import footer from '../images/logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <a href="index.html">
                <img src={ footer } alt="footer" />
            </a>
            <div className="footer-info">
                <div>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-instagram"></i>
                </div>
                <div>
                    <i class="fas fa-copyright"></i>
                    2021, Plastika Médica
                </div>
                <div>
                    Términos y condiciones
                </div>
            </div>
        </div>
    )
}

export default Footer