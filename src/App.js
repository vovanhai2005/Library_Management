import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookList from './components/BookList';
import BorrowerList from './components/BorrowerList';
import InfoPage from './components/InfoPage';
import './App.css'; // Import file CSS để tạo kiểu cho các nút

const App = () => {
  return (
    <Router>
      <nav>
        <ul style={{ listStyle: 'none', padding: '0 30px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <li>
            <Link to="/">
              <button className="nav-button">Book List</button>
            </Link>
          </li>
          <li>
            <Link to="/borrowers">
              <button className="nav-button">Borrower List</button>
            </Link>
          </li>
          <li>
            <Link to="/info">
              <button className="nav-button">Thông tin</button>
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/borrowers" element={<BorrowerList />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </Router>
  );
};

export default App;