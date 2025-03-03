import React, { useState, useEffect } from 'react';
import './App.css'; // Import file CSS

function App() {
  const [books, setBooks] = useState([]);

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
        <h1>Quản Lý Thư Viện</h1>
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