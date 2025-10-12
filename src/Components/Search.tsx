import React, { useState } from 'react'
import "../styles/Search.css"
import { FaSearch } from 'react-icons/fa'
import type { AppDispatch } from '../redux/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSearchResults } from '../redux/BooksSlice';

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); 
  const dispatch: AppDispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent) =>
  {
    e.preventDefault();
    if(query.trim())
    {
        dispatch(fetchSearchResults(query))
        navigate('/search');
        setQuery("");
    }
  };

  return (
    <div className='search-section'>
        <div className='search-container'>
            <form onSubmit={handleSubmit}>
                <div className='form-container'>
                    <input type="text" placeholder='Search by Title, Author, Keword...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}/>
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