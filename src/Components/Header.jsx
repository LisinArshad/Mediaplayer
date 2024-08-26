import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-radio" style={{color: '#FFD43B'}}></i>
            {' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      </>
  )
}

export default Header