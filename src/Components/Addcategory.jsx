import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Addcategory() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='container-fluid'>
        <button onClick={handleShow} className='btn btn-primary w-100 fw-bold'>Add Category</button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
            <FloatingLabel  controlId="floatingId" label="Category Id" className="mb-3">
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingname" label="Category Name">
        <Form.Control type="text" placeholder="Password" />
      </FloatingLabel>  </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

<div className='container border border-3 bg-dark shadow p-5 mb-3 rounded'>

</div>
    </div>
    </>
  )
}

export default Addcategory