import React from 'react'
import './Footer.css'

const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <div className="footer">
            <p><span>Invincible API</span> {currentYear} </p>
        </div>
    )
}

export default Footer
