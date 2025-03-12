import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookList from './components/BookList';
import BorrowerList from './components/BorrowerList';
import InfoPage from './components/InfoPage';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <a href="/">Book List</a>
          </li>
          <li>
            <a href="/borrowers">Borrower List</a>
          </li>
          <li>
            <a href="/info">Thông tin</a>
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