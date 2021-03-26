import React from 'react'
import Location from '../images/contact/contactform.png'

const ContactForm = () => {
    return(
        <div className="contactform">
            <div className="form">
                <h2>Agenda tu cita</h2>
                <form>
                    <input type="text" placeholder="nombre" required />
                    <br />
                    <input type="text" placeholder="teléfono" required />
                    <br />
                    <input type="text" placeholder="email" required />
                    <br />
                    <button type="button" className="button button-contact">Agendar</button>
                </form>
            </div>
            <div className="location">
                <h2>Ubicación</h2>
                <img src={ Location } alt="location" />
                <div className="location-info">
                    <i class="fas fa-phone-alt"></i>
                    <p>333 333 3333</p>
                    <i class="fas fa-envelope"></i>
                    <p>plastika@mymail.com</p>
                </div>
            </div>
        </div>
    )
}

export default ContactForm