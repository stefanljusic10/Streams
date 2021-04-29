import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../GoogleAuth/GoogleAuth'
import './Header.css'

function Header() {
    return (
        <div className="header-box">
            <Link to="/" className="header-home">
                Streamy
            </Link>
            <div className="header-nav">
                <Link to="/" id="header-all-streams" className="header-nav-item">
                    All Streams
                </Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header
