import React from 'react';
import './InfoPage.css'; // Import CSS

function InfoPage() {
  return (
    <div className="info-container">
      <h1 className="info-title">Thông Tin Thư Viện</h1>
      <div className="info-section">
        <h2 className="info-section-title">Giờ Mở Cửa</h2>
        <p>Thứ Hai - Thứ Sáu: 8:00 AM - 5:00 PM</p>
        <p>Thứ Bảy: 9:00 AM - 12:00 PM</p>
        <p>Chủ Nhật: Đóng cửa</p>
      </div>
      <div className="info-section">
        <h2 className="info-section-title">Liên Hệ</h2>
        <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
        <p>Điện thoại: (012) 345-6789</p>
        <p>Email: info@example.com</p>
      </div>
      {/* Add more sections as needed */}
    </div>
  );
}

export default InfoPage;