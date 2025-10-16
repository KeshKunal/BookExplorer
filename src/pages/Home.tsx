import React, { useEffect } from 'react';
import "../styles/Home.css";
import Categories from '../Components/Categories';
import Search from '../Components/Search';
import BookList from '../Components/BookList';

import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store'; 
import { fetchBooksByCategory } from '../redux/BooksSlice';

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { booksByCategory, loading, error } = useSelector((state: RootState) => state.books);

  const categories = ["Fiction", "Fantasy", "Science", "History", "Biography", "Mystery"];

  useEffect(() => {
    categories.forEach(category => {
      if (!booksByCategory[category]) {
        dispatch(fetchBooksByCategory(category));
      }
    });
  }, [dispatch, booksByCategory]);

  return (
    <>
      <div className='hero-section'>
        <h1 className="hero-title">Find your next adventure!</h1>
        <img src="src/assets/icon.png" alt="Book Explorer Logo" className="hero-logo" />
        <Search />
        <Categories />
      </div>

      <div className="homepage-content">
        {loading && <p>Loading books...</p>}
        {error && <p>Error: {error}</p>}

        {Object.entries(booksByCategory).map(([category, books]) => (
          <div key={category} className="category-showcase">
            <BookList books={books} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;