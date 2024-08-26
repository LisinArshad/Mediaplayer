import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Addvideo() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='container-fluid'>
    <Button className='btn' style={{background:'none',border:'none'}} onClick={handleShow}>
    <i className="fa-solid fa-circle-plus" style={{color: "#ebb800",height:'0px'}}></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel controlId="floatingId" label="Video Id" className="mb-3">
        <Form.Control type="number" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingcap" label="Caption" className="mb-3">
        <Form.Control type="text" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel controlId="imgid" label="Image Url" className="mb-3">
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="videourl" label="Video Url" className="mb-3">
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
  
    </div>
    </>
  )
}

export default Addvideo