import { Col, Row } from 'antd'
import React from 'react'
import '../Footer/Footer.css'

export default function MainFooter() {
  return (
    <div >
        
        <Row className=' footer text-center'>
          <Col span={6}>
            <h5>Rạp Phim:</h5>
            <ul className='content'>
              <li><a href="#!">Giới Thiệu</a> </li>
              <li><a href="#!">Tiện Ích Online</a></li>
              <li><a href="#!">Thẻ Quà Tặng</a> </li>
              <li><a href="#!">Tuyển Dụng</a></li>
            </ul>
          </Col>
          <Col span={6}>
            <h5>Điều Khoản Sử Dụng:</h5>
            <ul className='content'>
              <li><a href="#!">Điều Khoản Chung</a> </li>
              <li><a href="#!">Chính Sách Thanh Toán</a></li>
              <li><a href="#!">Chính Sách Bảo Mật</a> </li>
              <li><a href="#!">Câu Hỏi Thường Gặp</a></li>
            </ul>
          </Col>
          <Col span={6}>
            <h5>Kết Nối Với Chúng Tôi:</h5>
            <ul className='content'>
        
              <li className='top'><img src='./img/icon.png' alt='icon' /></li>
              <li><img src='./img/license.png' alt='license' /></li>
      
            </ul>
          </Col>
          <Col span={6.8}>
            <h5>Chăm Sóc Khách Hàng:</h5>
            <ul className='content'>
              <li><a href="#!">Hotline: 1900 1000</a> </li>
              <li><a href="#!">Giờ Làm Việc: 8:00 - 22:00</a></li>
              <li><a href="#!">Các Ngày Lễ Tết</a> </li>
              <li><a href="#!">Hỏi Đáp</a></li>
            </ul>
          </Col>
        </Row>
    </div>
  )
}
