import React from 'react'
import avatarOne   from '../images/cards/avatar_1.jpg'
import avatarTwo   from '../images/cards/avatar_2.jpg'
import avatarThree from '../images/cards/avatar_3.jpg'

const Content = () => {
    return(
        <main className="main">
            <h2 className="main-info">Los últimos <span> tips </span> para ti</h2>
            <div className="cards">
                <img src={ avatarOne } className="cards-img" alt="avatar1" />
                <div className="cards-info">
                    <h2 className="cards-info--title">hablemos del botox</h2>
                    <p className="cards-info--text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum animi, corrupti molestias consequatur neque possimus itaque ducimus impedit iand minima tempore consectetur periam neque.
                        <br /> <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quia, fugit aut quas molestiae ut enim, eius vel atque  quis.
                    </p>
                    <button type="button" className="button button-info">Ver más</button>
                </div>
            </div>
            <div className="cards">
                <img src={ avatarTwo } className="cards-img" alt="avatar1" />
                <div className="cards-info">
                    <h2 className="cards-info--title">Tratamientos Anti-Aging</h2>
                    <p className="cards-info--text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum animi, corrupti molestias consequatur neque possimus itaque ducimus impedit iand minima tempore consectetur periam neque.
                        <br /> <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quia, fugit aut quas molestiae ut enim, eius vel atque  quis.
                    </p>
                    <button type="button" className="button button-info">Ver más</button>
                </div>
            </div>
            <div className="cards">
                <img src={ avatarThree } className="cards-img" alt="avatar1" />
                <div className="cards-info">
                    <h2 className="cards-info--title">Tratamientos Faciales</h2>
                    <p className="cards-info--text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum animi, corrupti molestias consequatur neque possimus itaque ducimus impedit iand minima tempore consectetur periam neque.
                        <br /> <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quia, fugit aut quas molestiae ut enim, eius vel atque  quis.
                    </p>
                    <button type="button" className="button button-info">Ver más</button>
                </div>
            </div>
        </main>
    )
}

export default Content