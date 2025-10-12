import React from 'react'
import "../styles/Home.css"

import Categories from '../Components/Categories';
import Search from '../Components/Search';

const Home : React.FC = () => {
  return (
    <div className='home-container'>
        <h1 className="hero-title">find your next Adventure!</h1>
        <img src="src\assets\icon.png" alt="Book Explorer Logo" className="hero-logo" />
        <Search />
        <Categories />
    </div>
    
  )
}

export default Home;