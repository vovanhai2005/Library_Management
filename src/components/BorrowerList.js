import React, { useState, useEffect } from 'react';
import '../App.css'; // Import file CSS
import plusIcon from '../add.png';
import cancelIcon from '../cancel.png';

function BorrowerList() {
  const [borrowers, setBorrowers] = useState([]);
  const [newBorrower, setNewBorrower] = useState({
    tên_người_mượn: '',
    mã_số: '',
    số_điện_thoại: '',
    địa_chỉ: '',
    sách_đang_mượn: ''
  });
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/borrower_data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBorrowers(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleAddClick = () => {
    if (newBorrower.tên_người_mượn.trim() === '' || newBorrower.mã_số.trim() === '' || 
          newBorrower.số_điện_thoại.trim() === '' || newBorrower.địa_chỉ.trim() === '' || 
            newBorrower.sách_đang_mượn.trim() === '') {      
      window.alert('Vui lòng nhập đầy đủ thông tin người mượn');
      return;
    }
    setBorrowers([...borrowers, newBorrower]);
    setNewBorrower({
      tên_người_mượn: '',
      mã_số: '',
      số_điện_thoại: '',
      địa_chỉ: '',
      sách_đang_mượn: ''
    });
    setShowAddForm(false);
    if (window.confirm('Bạn có muốn thêm người mượn không?')) {
      window.alert('Thêm người mượn thành công!');
    }
  };

  const handleDeleteClick = (index) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa người mượn này không?')) {
      const newBorrowers = [...borrowers];
      newBorrowers.splice(index, 1);
      setBorrowers(newBorrowers);
    }
  }

  const handleInputChange = (e) => {
    const {name , value} = e.target;
    setNewBorrower({
      ...newBorrower,
      [name]: value
    });
  };

  const toggleAddForm = () => {
    setShowAddForm(true);
    setNewBorrower({
      tên_người_mượn: '',
      mã_số: '',
      số_điện_thoại: '',
      địa_chỉ: '',
      sách_đang_mượn: ''
    });
  };

  const toggleCancelForm = () => {
    if (window.confirm("Bạn có chắc chắn muốn hủy bỏ thêm người mượn?")) {
      setShowAddForm(!showAddForm);
    }
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">Quản Lý Người Mượn</h1>
        {/* Ẩn nút toggle khi form đang hiển thị */}
        {!showAddForm && (
          <button onClick={toggleAddForm} className="add-button toggle-button">
            <img src={plusIcon} alt="Thêm người mượn" className="icon" />
            <span>Thêm Người Mượn</span>
          </button>
        )}
        {showAddForm && (
          <div className="add-book-form">
            {/* Tên người mượn */}
            <input
              type="text"
              name="tên_người_mượn"
              placeholder="Tên người mượn"
              value={newBorrower.tên_người_mượn}
              onChange={handleInputChange}>
            </input>

            {/* Mã số */}
            <input
              type="text"
              name="mã_số"
              placeholder="Mã số"
              value={newBorrower.mã_số}
              onChange={handleInputChange}>
            </input>
            
            {/* Số điện thoại */}
            <input
              type="text"
              name="số_điện_thoại"
              placeholder="Số điện thoại"
              value={newBorrower.số_điện_thoại}
              onChange={handleInputChange}>
            </input>
            
            {/* Địa chỉ */}
            <input
              type="text"
              name="địa_chỉ"
              placeholder="Địa chỉ"
              value={newBorrower.địa_chỉ}
              onChange={handleInputChange}>
            </input>

            {/* Sách đang mượn */}
            <input
              type="text"
              name="sách_đang_mượn"
              placeholder="Sách đang mượn"
              value={newBorrower.sách_đang_mượn}
              onChange={handleInputChange}>
            </input>

            <button onClick={handleAddClick} className="add-button">
              <span>Xác nhận</span>
            </button>

            <button onClick={toggleCancelForm} className="cancel-button">
              <img src={cancelIcon} alt="Xóa lựa chọn" className="icon"></img>
            </button>
          </div>
        )}
      </header>
      <table className="book-table">
        <thead>
          <tr>
            <th>Tên người mượn</th>
            <th>Mã số</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Sách đang mượn</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {borrowers.map((borrower, index) => (
            <tr key={index}>
              <td>{borrower.tên_người_mượn}</td>
              <td>{borrower.mã_số}</td>
              <td>{borrower.số_điện_thoại}</td>
              <td>{borrower.địa_chỉ}</td>
              <td>{borrower.sách_đang_mượn}</td>
              <td>
                <button className="delete-button" onClick={() => handleDeleteClick(index)}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BorrowerList;