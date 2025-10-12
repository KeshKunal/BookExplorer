// remember to use rafce for boilerplate
import React from 'react'
import "../styles/Header.css"

const Header: React.FC = () => {
  return (
    <header className="header-section">
        <div className='header-container'>
            <div className='logo'>
              <img src="src\assets\icon.png" alt="Logo"/>
            <h2>Book Explorer</h2>
        </div>
        <div className='Nav-bar'>
            <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Latest</a></li>
            <li><a href="">About</a></li>
            </ul>
        </div>
        </div>
    </header>
  )
}

export default Header; 