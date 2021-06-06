import React from 'react'
import './Footer.css'

const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <div className="footer">
            <p>Invincible API {currentYear} </p>
        </div>
    )
}

export default Footer
