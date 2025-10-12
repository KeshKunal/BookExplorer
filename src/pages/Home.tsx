import React, { useEffect } from 'react'
import "../styles/Home.css"
import Categories from '../Components/Categories';
import Search from '../Components/Search';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch , RootState} from '../redux/store'; 
import { fetchBooksByCategory } from '../redux/BooksSlice';

const Home : React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const bookByCategory = useSelector((state: RootState) => state.books.booksByCategory)
    useEffect(() => {
    const categories = ["Fiction", "Fantasy", "Science", "History", "Biography", "Mystry"];
    
    categories.forEach(category => {
        if(!bookByCategory[category])
        {
      dispatch(fetchBooksByCategory(category));
        }
    });
  }, [dispatch, bookByCategory]);
  
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