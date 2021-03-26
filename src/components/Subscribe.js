import React from 'react'

const Subscribe = () => {
    return(
        <div className="subscribe">
            <h2>Suscribete al <br /> Newsletter</h2>
            <form>
                <input type="email" name="email" placeholder="email" class="subscribe-email" required />
               <br />
               <button type="submit" class="subscribe-button">Suscribirse</button>
            </form>
        </div>
    )
}

export default Subscribe