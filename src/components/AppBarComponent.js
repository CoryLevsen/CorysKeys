import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// routing
import {useNavigate} from "react-router-dom";
// Icons
import { MdOutlineMail, MdSettings,  } from 'react-icons/md'
import { IoMdNotifications } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'

export default function AppBarComponent() {
  let navigate = useNavigate();
  return (
    <div className="appBar-style">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home"><span>Cory's Keys</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='me-auto'></Nav>
            <Nav>
              <Nav.Link ><MdOutlineMail size={28} /></Nav.Link>
              <Nav.Link ><MdSettings size={28}/></Nav.Link>
              <Nav.Link ><IoMdNotifications size={28}/></Nav.Link>
              <Nav.Link ><CgProfile size={28}/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
