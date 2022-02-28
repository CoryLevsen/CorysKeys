import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container';

export default function SideBarComponent() {
  return (
    <>
    <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
          activeKey="/home"
          onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
        <div className="sidebar-sticky"></div>
        <Nav.Item className="sidebar-item-container">
            <Nav.Link href="/home">venders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">USERS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">CATEGORIES</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled">PRODUCTS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/home">ORDERS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">REVIEWS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">BRANDS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled">ADMINISTRATION</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}
