import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BookList.css';

interface Book {
  key: string;
  title: string;
  authors?: { name: string }[];
  author_name?: string[];
  cover_id?: number;
  cover_i?: number;
}

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => {
        const coverId = book.cover_id || book.cover_i;
        const author = book.authors?.[0]?.name || book.author_name?.[0] || "Unknown Author";

        return (
          <div key={book.key} className="book-card">
            <Link to={`/book/${book.key.replace("/works/", "")}`}>
              {coverId ? (
                <img 
                  src={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`} 
                  alt={book.title} 
                />
              ) : (
                <div className="no-cover">No Cover</div>
              )}
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>{author}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;