import React, { useState, useEffect } from 'react';
import './App.css'; // Import file CSS

function BookList() {
  const [books, setBooks] = useState([]);
  const [newBooks, setNewBooks] = useState({
    tên_sách: '',
    tác_giả: '',
    tình_trạng: '',
    số_lượng: '',
    thể_loại: ''
  });
  const [showAddForm, setShowAddForm] = useState(false);

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

  const handleAddClick = () => {
    if (newBooks.tên_sách.trim() === '' || newBooks.tác_giả.trim() === '' || 
          newBooks.tình_trạng.trim() === '' || newBooks.số_lượng.trim() === '' || 
            newBooks.thể_loại.trim() === '') {      
      window.alert('Vui lòng nhập đầy đủ thông tin sách');
      return;
    }
    setBooks([...books, newBooks]);
    setNewBooks({
      tên_sách: '',
      tác_giả: '',
      tình_trạng: '',
      số_lượng: '',
      thể_loại: ''
    });
    setShowAddForm(false);
    window.alert('Thêm sách thành công!');
  };

  const handleInputChange = (e) => {
    const {name , value} = e.target;
    setNewBooks({
      ...newBooks,
      [name]: value
    });
  };

  const toggleAddForm = () => {
    setShowAddForm(true);
    setNewBooks({
      tên_sách: '',
      tác_giả: '',
      tình_trạng: '',
      số_lượng: '',
      thể_loại: ''
    });
  };

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
              onChange={handleInputChange}>
            </input>

            {/* Tác giả */}
            <input
              type="text"
              name="tác_giả"
              placeholder="Tác giả"
              value={newBooks.tác_giả}
              onChange={handleInputChange}>
            </input>
            
            {/* Tình trạng */}
            <input
              type="text"
              name="tình_trạng"
              placeholder="Tình trạng"
              value={newBooks.tình_trạng}
              onChange={handleInputChange}>
            </input>
            
            {/* Số lượng */}
            <input
              type="text"
              name="số_lượng"
              placeholder="Số lượng"
              value={newBooks.số_lượng}
              onChange={handleInputChange}>
            </input>

            {/* Thể loại */}
            <input
              type="text"
              name="thể_loại"
              placeholder="Thể loại"
              value={newBooks.thể_loại}
              onChange={handleInputChange}>
            </input>

            <button onClick={handleAddClick} className="add-button">
              <span>Xác nhận</span>
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
            <th>Xóa</th>
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

export default BookList;