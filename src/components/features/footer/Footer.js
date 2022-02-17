import React from 'react';
import "../../styles/style.css";

// @desc Footer component

export const Footer = () => {

    return (
        <footer title="footer" className="Footer-container">
            <div className="social-links">
                <ul className="social-links-list">
                    <a href="https://github.com/Lior3796"><li className="social-links-items">Github</li></a>
                    <a href="https://www.linkedin.com/in/lior-solomon-246254206/"><li className="social-links-items">Linkedin</li></a>
                </ul>
            </div>
        </footer>
    );
}

