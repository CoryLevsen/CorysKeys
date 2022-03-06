import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AppBarComponent from './AppBarComponent'
import SideBarComponent from './SideBarComponent'
import PanelComponent from './PanelComponent'

export default function dashboard() {
  return (
    <>
        <AppBarComponent />
        <Container fluid>
            <Row>
                <Col xs={3} id="sidebar-wrapper">
                  <SideBarComponent />
                </Col>
                <Col xs={9} id="page-content-wrapper">
                  <PanelComponent />
                </Col>
            </Row>
        </Container>
    </>
  )
}
