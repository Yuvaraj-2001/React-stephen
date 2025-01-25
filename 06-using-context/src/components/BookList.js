import BookShow from './BookShow';
import { useContext } from 'react';
import { dataContext } from '../context/dataContext';

function BookList() {
  const {books} = useContext(dataContext);
  
  const renderedBooks = books.map((book) => {
    return (
      <BookShow  key={book.id} book={book} />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
