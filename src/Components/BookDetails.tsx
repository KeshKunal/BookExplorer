import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store';
import { fetchBookDetails } from '../redux/BooksSlice';
import '../styles/BookDetails.css';

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { bookDetails, loading, error } = useSelector((state: RootState) => state.books);

  useEffect(() => {
    if (id) dispatch(fetchBookDetails(id));
  }, [id, dispatch]);

  const description = bookDetails?.description
    ? (typeof bookDetails.description === 'string'
        ? bookDetails.description
        : bookDetails.description.value)
    : 'No description available.';

  if (loading) return <p className="status-message">Loading details...</p>;
  if (error) return <p className="status-message error">Error: {error}</p>;

  return (
    <div className="book-details-page">
      <button onClick={() => navigate(-1)} className="back-button">&larr; Go Back</button>

      {bookDetails && (
        <div className="details-content">
          <div className="details-cover">
            {bookDetails.covers && bookDetails.covers.length > 0 ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg`}
                alt={bookDetails.title}
              />
            ) : (
              <div className="no-cover-large">No Cover</div>
            )}
          </div>

          <div className="details-info">
            <h1>{bookDetails.title}</h1>

            {bookDetails.subjects && bookDetails.subjects.length > 0 && (
              <div className="subjects">
                {bookDetails.subjects.slice(0, 6).map((s) => (
                  <span key={s} className="subject-tag">{s}</span>
                ))}
              </div>
            )}

            <p className="description">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;