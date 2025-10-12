import React from 'react'
import "../styles/Categories.css"

const Categories: React.FC = () => {

const categories = [
    "Fiction",
    "Fantasy",
    "Science",
    "History",
    "Biography",
    "Mystery"
];
  return (
    <div className='categories-section'>
        {categories.map((category,index) =>(
            <span key={index}>{category}</span>
        ))}
    </div>
  )
}

export default Categories;