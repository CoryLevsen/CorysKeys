import React, {useState} from 'react'

import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './../libs/firebase'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AppBarComponent from './AppBarComponent'
import SideBarComponent from './SideBarComponent'

export default function Dashboard() {
  const [isUser, setIsUser] = useState(false)
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user)=>{
    if (user) {
      setIsUser(true)
    } else {  
      setIsUser(false)
      // login page
      navigate("/")
    }
  })

  if (isUser) {
    return (
      <>
          <AppBarComponent />
          <Container fluid>
              <Row>
                  <Col xs={2} id="sidebar-wrapper">
                    <SideBarComponent />
                  </Col>
                  <Col xs={10} id="page-content-wrapper">
                    <Outlet/>
                  </Col>
              </Row>
          </Container>
      </>
    )
  } else {
    return null
  }

}
