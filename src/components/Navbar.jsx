import React from 'react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    const location = useLocation();

    return (
        <div>
            <div className="nav h-14">
                <div className="logo text-amber-50">IQRA RAHMAN</div>
                <div className="menu">
                    <ul>
                        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
                        <li><Link to="/certificates" className={location.pathname === '/certificates' ? 'active' : ''}>Certificates</Link></li>
                        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact me</Link></li>

                    </ul>
                    <div className="gitProfile">
                        <a href="https://github.com/Iqra-Rahman"><img src="https://images.sftcdn.net/images/t_app-icon-m/p/5fa45cf4-9a9b-11e6-861a-00163ec9f5fa/629080884/github-logo" alt="gitHub" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
