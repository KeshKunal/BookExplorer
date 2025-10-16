import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BookList.css';

interface Book {
  key: string;
  title: string;
  authors?: { name: string }[];
  cover_id?: number;
}

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.key} className="book-card">
          <Link to={`/book/${book.key.replace("/works/", "")}`}>
            {book.cover_id ? (
              <img 
                src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} 
                alt={book.title} 
              />
            ) : (
              <div className="no-cover">No Cover</div>
            )}
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>{book.authors?.[0]?.name || "Unknown Author"}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;