import React from 'react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import {FaGithub} from "react-icons/fa";

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
                        <li><Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link></li>
                        {/* <li><Link to="/certificates" className={location.pathname === '/certificates' ? 'active' : ''}>Certificates</Link></li> */}
                        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact me</Link></li>
                        {/* <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={30}/>
                              </a></li> */}

                    </ul>
                    {/* <div className="gitProfile">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                              </a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
