import { useState } from 'react';
import BookEdit from './BookEdit';
import { useContext } from 'react';
import { dataContext } from '../context/dataContext';

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const {deleteBookById, editBookById} = useContext(dataContext);


  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };


  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    editBookById(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
