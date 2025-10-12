import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search: React.FC = () => {
  return (
    <div className='search-section'>
        <div className='search-container'>
            <img src="src\assets\icon.png" alt="Book Explorer Logo" className="hero-logo" />
            <form>
                <div className='form-conatiner'>
                    <input type="text" placeholder='Dive into world of books...'/>
                    <button type='submit'>
                        <FaSearch />
                    </button>
                </div>
            </form>
        </div>
        </div>
  )
}

export default Search