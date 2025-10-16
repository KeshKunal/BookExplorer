import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import BookList from '../Components/BookList';
import '../styles/SearchResult.css';

const SearchResults: React.FC = () => {
  const { searchResults, loading, error } = useSelector((state: RootState) => state.books);

  const renderContent = () => {
    if (loading) {
      return <p className="status-message">Loading...</p>;
    }

    if (error) {
      return <p className="status-message error">Error: {error}</p>;
    }

    if (searchResults.length === 0) {
      return <p className="status-message">No books found for your search.</p>;
    }

    return <BookList books={searchResults} />;
  };

  return (
    <div className="search-results-page">
      <h1>Search Results</h1>
      {renderContent()}
    </div>
  );
};

export default SearchResults;