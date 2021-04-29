import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header-box">
            <Link to="/" className="header-home">
                Streamy
            </Link>
            <div className="header-nav">
                <Link to="/" className="header-nav-item">
                    All Streams
                </Link>
                <Link to="/" className="header-nav-item">
                    
                </Link>
            </div>
        </div>
    )
}

export default Header
