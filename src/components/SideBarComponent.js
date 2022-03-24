import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import {signOut} from 'firebase/auth'
import {auth} from './../libs/firebase'

// routing
import {useNavigate} from "react-router-dom";

export default function SideBarComponent() {
    let navigate = useNavigate();
    return (
    <>
    <Nav className="col-md-12  d-md-block sidebar"
            activeKey="/home">
        <div className="sidebar-sticky"></div>
        <Nav.Item className="sidebar-item-container">
            <Nav.Link href="/dashboard">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/vendors">Vendors</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/users">Users</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/categories">Categories</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className='allProducts' >View All Products</Nav.Link>
            <Nav.Link as={Link} to='add' className='allProducts'>Add New Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/orders">Orders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/reviews">Reviews</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/brands">Brands</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/administration">Administration</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className='sign-out' onClick={() => {
                signOut(auth)
                navigate("/login");
            }}>Sign Out
            </Nav.Link>
        </Nav.Item>
    </Nav>
    </>
    )
}
