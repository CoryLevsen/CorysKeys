import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import {signOut} from 'firebase/auth'
import {auth} from './../libs/firebase'

// routing
import {useNavigate} from "react-router-dom";

// Icons
import {MdSpaceDashboard} from 'react-icons/md'

export default function SideBarComponent() {
    let navigate = useNavigate();
    return (
    <>
    <Nav className="col-md-12  d-md-block sidebar"
            activeKey="/home">
        <div className="sidebar-sticky"></div>
        <Nav.Item className="sidebar-container d-flex">
            <Nav.Link className='icons' href="/dashboard"><MdSpaceDashboard/></Nav.Link>
            <Nav.Link className='words' href="/dashboard">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><MdSpaceDashboard/></Nav.Link>
            <Nav.Link className='words' href="/vendors">Vendors</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><MdSpaceDashboard/></Nav.Link>
            <Nav.Link className='words' href="/users">Users</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><MdSpaceDashboard/></Nav.Link>
            <Nav.Link className='words' href="/categories">Categories</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><MdSpaceDashboard/></Nav.Link>
            <Nav.Link className='words' href="/products">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><MdSpaceDashboard/></Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className='allProducts words' >View All Products</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><MdSpaceDashboard/></Nav.Link>
            <Nav.Link as={Link} to='add' className='allProducts words'>Add New Products</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><MdSpaceDashboard/></Nav.Link>
            <Nav.Link className='words' href="/orders">Orders</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><MdSpaceDashboard/></Nav.Link>
            <Nav.Link className='words' href="/reviews">Reviews</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><MdSpaceDashboard/></Nav.Link>
            <Nav.Link className='words' href="/brands">Brands</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><MdSpaceDashboard/></Nav.Link>
            <Nav.Link className='words' href="/contact">Contact Us</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><MdSpaceDashboard/></Nav.Link>
            <Nav.Link className='words' href="/administration">Administration</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex sign-out'>
            <Nav.Link className='icons' href="/dashboard"><MdSpaceDashboard/></Nav.Link>
            <Nav.Link className='words' onClick={() => {
                signOut(auth)
                navigate("/login");
            }}>Sign Out
            </Nav.Link>
        </Nav.Item>
    </Nav>
    </>
    )
}
