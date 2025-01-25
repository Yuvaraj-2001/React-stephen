import { useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';
import { dataContext } from './context/dataContext';


function App() {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    const fetch = async () => {
      const response = await axios.get('http://localhost:3001/books/');
      setBooks(response.data);
    };
    fetch();
  }, [])

  const editBookById = async (id, newTitle) => {

    const response = await axios.put('http://localhost:3001/books/'+id, { title: newTitle});

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', { title });
    const updatedBooks = [...books, response.data];
    // const updatedBooks = [
    //   ...books,
    //   {
    //     id: Math.round(Math.random() * 9999),
    //     title,
    //   },
    // ];
    setBooks(updatedBooks);
  };

  return (
    <dataContext.Provider value={{books, deleteBookById, editBookById, createBook}}>
       <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate/>
      </div>
    </dataContext.Provider>
   
  );
}

export default App;
