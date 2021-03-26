import React from 'react'
import LogoPlastika from '../images/logo.jpg'

const Logo = () => {
    return(
        <div className="logoPlastika">
            <a href="index.html">
                <img src={ LogoPlastika } alt="Plastika" />
            </a>
        </div>
    )
}

export default Logo