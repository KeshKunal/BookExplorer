import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch } from '../redux/store';
import { fetchSearchResults } from '../redux/BooksSlice';
import "../styles/Categories.css";

const Categories: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const categories = ["Fiction", "Fantasy", "Science", "History", "Biography", "Mystery"];

  const handleCategoryClick = (category: string) => {
    dispatch(fetchSearchResults(category));
    navigate('/search');
  };

  return (
    <div className='categories-section'>
      {categories.map((category) => (
        <span key={category} onClick={() => handleCategoryClick(category)}>
          {category}
        </span>
      ))}
    </div>
  );
};

export default Categories;