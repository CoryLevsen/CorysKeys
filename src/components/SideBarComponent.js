import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import {signOut} from 'firebase/auth'
import {auth} from './../libs/firebase'

// routing
import {useNavigate} from "react-router-dom";

// Icons
import {MdSpaceDashboard, MdOutlineAdminPanelSettings} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {GoKeyboard} from 'react-icons/go'
import {FiShoppingCart} from 'react-icons/fi'
import {AiOutlineEdit, AiOutlinePlus} from 'react-icons/ai'
import {BsBook, BsTelephoneForward} from 'react-icons/bs'
import {VscSignOut} from 'react-icons/vsc'
import {HiViewList} from 'react-icons/hi'

export default function SideBarComponent() {
    let navigate = useNavigate();
    return (
    <>
    <Nav className="col-md-12  d-md-block sidebar"
            activeKey="/home">
        <div className="sidebar-sticky"></div>
        <Nav.Item className="sidebar-container d-flex">
            <Nav.Link className='icons' href="/dashboard"><MdSpaceDashboard size={28}/></Nav.Link>
            <Nav.Link className='words' href="/dashboard">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><CgProfile size={28}/></Nav.Link>
            <Nav.Link className='words' href="/users">Users</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><GoKeyboard size={28}/></Nav.Link>
            <Nav.Link className='words' href="/products">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><HiViewList size={28}/></Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className='words' >View All Products</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><AiOutlinePlus size={28}/></Nav.Link>
            <Nav.Link as={Link} to='add' className='words'>Add New Products</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><AiOutlineEdit size={28}/></Nav.Link>
            <Nav.Link as={Link} to='edit' className='words'>Edit Products</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><FiShoppingCart size={28}/></Nav.Link>
            <Nav.Link className='words' href="/orders">Orders</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><BsBook size={28}/></Nav.Link>
            <Nav.Link className='words' href="/reviews">Reviews</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><BsTelephoneForward size={28}/></Nav.Link>
            <Nav.Link className='words' href="/contact">Contact Us</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
            <Nav.Link className='icons' href="/dashboard"><MdOutlineAdminPanelSettings size={28}/></Nav.Link>
            <Nav.Link className='words' href="/administration">Administration</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex sign-out'>
            <Nav.Link className='icons' href="/dashboard"><VscSignOut size={28}/></Nav.Link>
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
