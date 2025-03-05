import React, { useState, useEffect } from 'react';
import './App.css'; // Import file CSS
import plusIcon from './add.png';

function App() {
  const [books, setBooks] = useState([]);
  const [newBooks, setNewBooks] = useState({
    tên_sách: '',
    tác_giả: '',
    tình_trạng: '',
    số_lượng: '',
    thể_loại: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">Quản Lý Thư Viện</h1>
        <div className="add-book-form">
          {/* Tên sách */}
          <input
            type="text"
            name="tên_sách"
            placeholder="Tên sách"
            value={newBooks.tên_sách}
            >
          </input>

          {/* Tác giả */}
          <input
            type="text"
            name="tác_giả"
            placeholder="Tác giả"
            value={newBooks.tác_giả}
            >
          </input>
          
          {/* Tình trạng */}
          <input
            type="text"
            name="tình_trạng"
            placeholder="Tình trạng"
            value={newBooks.tình_trạng}
            >
          </input>
          
          {/* Số lượng */}
          <input
            type="text"
            name="số_lượng"
            placeholder="Số lượng"
            value={newBooks.số_lượng}
            >
          </input>

          {/* Thể loại */}
          <input
            type="text"
            name="thể_loại"
            placeholder="Thể loại"
            value={newBooks.thể_loại}
            >
          </input>

          <button className="add-button">
            <img src={plusIcon} alt="Thêm sách" className="icon" />
            <span>Thêm sách</span>
          </button>
          
        </div>
      </header>
      <table className="book-table">
        <thead>
          <tr>
            <th>Tên sách</th>
            <th>Tác giả</th>
            <th>Tình trạng</th>
            <th>Số lượng</th>
            <th>Thể loại</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.tên_sách}</td>
              <td>{book.tác_giả}</td>
              <td>{book.tình_trạng}</td>
              <td>{book.số_lượng}</td>
              <td>{book.thể_loại}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;