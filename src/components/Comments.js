import React from 'react'
import avatar1 from '../images/cards/avatar_1.jpg'
import avatar2 from '../images/cards/avatar_2.jpg'
import avatar3 from '../images/cards/avatar_3.jpg'

const Comments = () => {
    return(
        <div className="comments">
            <h2>Testimonios</h2>
            <div className="comments-person">
                <div className="comments-person--icon">
                    <i class="fas fa-quote-left"></i>
                    <i class="fas fa-quote-left"></i>
                    <i class="fas fa-quote-left"></i>
                </div>
                <div className="comments-person--text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero minima, at quia neque eius fugiat ad fuga quibusdam, quis placeat temporibus quo animi eaque reprehenderit odit vel.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero minima, at quia neque eius fugiat ad fuga quibusdam, quis placeat temporibus quo animi eaque reprehenderit odit, sapiente beatae magnam vel.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero minima, at quia neque eius fugiat ad fuga quibusdam, quis placeat temporibus quo animi eaque reprehenderit odit, sapiente beatae magnam vel.
                    </p>
                </div>
                <div className="comments-person--avatar">
                    <img src={ avatar1 } alt="avatar1" />
                    <p>Lorem Ipsum.</p>
                    <img src={ avatar2 } alt="avatar2" />
                    <p>Lorem Ipsum.</p>
                    <img src={ avatar3 } alt="avatar3" />
                    <p>Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    )
}

export default Comments