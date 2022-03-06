import React from 'react'
import Nav from 'react-bootstrap/Nav';
// routing
import {useNavigate} from "react-router-dom";

export default function SideBarComponent() {
    let navigate = useNavigate();
    return (
    <>
    <Nav className="col-md-12  d-md-block bg-light sidebar"
            activeKey="/home">
        <div className="sidebar-sticky"></div>
        <Nav.Item className="sidebar-item-container">
            <Nav.Link href="/dashboard">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/vendors">VENDORS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/users">USERS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/categories">CATEGORIES</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/products">PRODUCTS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/orders">ORDERS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/reviews">REVIEWS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/brands">BRANDS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/contact">CONTACT US</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/administration">ADMINISTRATION</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link onClick={() => {
                navigate("/login");
            }}>Sign Out
            </Nav.Link>
        </Nav.Item>
    </Nav>
    </>
    )
}