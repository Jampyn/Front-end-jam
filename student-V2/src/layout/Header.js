import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" className="px-4 bg-dark">
      <Navbar.Brand className="fs-2 text-white" href="/">
        Student
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="text-white" href="#" onClick={() => navigate('/')}>
            หน้าแรก
          </Nav.Link>
          <Nav.Link className="text-white" href="#" onClick={() => navigate('/student')}>
            ข้อมูลนักศึกษา
          </Nav.Link>
          <Nav.Link className="text-white" href="#">
            ข้อมูลการจอง
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="text-white" href="#">
            เข้าสู่ระบบ
          </Nav.Link>
          <Nav.Link className="text-white" href="#">
            ลงทะเบียน
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
