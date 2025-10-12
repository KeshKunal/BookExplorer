import React from 'react'
import "../styles/Search.css"
import { FaSearch } from 'react-icons/fa'

const Search: React.FC = () => {
  return (
    <div className='search-section'>
        <div className='search-container'>
            <form>
                <div className='form-container'>
                    <input type="text" placeholder='Search by Title, Author, Keword...'/>
                    <button type='submit' className='search-button'>
                        <FaSearch size={18} />
                    </button>
                </div>
            </form>
        </div>
        </div>
  )
}

export default Search;