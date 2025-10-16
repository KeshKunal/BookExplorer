// remember to use rafce for boilerplate
import React from 'react'
import "../styles/Header.css"
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header-section">
        <div className='header-container'>
            <div className='logo'>
            <Link to = "/"><img src="/icon.png" alt="Logo"/></Link>
            <h2>Book Explorer</h2>
        </div>
        <div className='Nav-bar'>
            <ul>
            <li><Link to = "/">Home</Link></li>
            <li><a href="https://github.com/KeshKunal/BookExplorer">GitHub</a></li>
            </ul>
        </div>
        </div>
    </header>
  )
}

export default Header; 