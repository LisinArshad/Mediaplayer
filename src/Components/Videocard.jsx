import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Videocard() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div>
    <Card style={{ width: '13rem' }}>
      <Card.Img style={{cursor:'pointer'}} onClick={handleShow} variant="top" src="https://i.scdn.co/image/ab67616d0000b273b54cdfbfaa828674ffecd12c" />
      <Card.Body>
        <Card.Title> illuminati</Card.Title>
        <Button variant="btn"><i className="fa-solid fa-trash-can" style={{color: "#ff0000",}} /></Button>
      </Card.Body>
    </Card>
    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> illuminati</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/tOM-nWPcR4U?si=EWVSpjMAmmlLYCFs&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
        </>
  )
}

export default Videocard