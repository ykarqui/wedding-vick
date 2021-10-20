import React from 'react';
import wp from '../images/w.png'

const Contact = () => {
    return (
        <footer>
            <div className="container center-text">
                <ul className="social-icons">
                    <li>
                        <a href="https://wa.me/5493515443409" target="_blank" rel="noopener noreferrer">
                            <img alt="Mandar un mensaje a Juancito" src={wp} /> 
                             Ayuda, me perdi!
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Contact;
