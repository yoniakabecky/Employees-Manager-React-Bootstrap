import React, { useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { ModalContext } from '../../contexts/ModalContext';

const AddModal = () => {
  const { addModal, closeAddModal } = useContext(ModalContext);

  return (
    <Modal show={addModal} onHide={closeAddModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows="1" />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeAddModal}>
          Close
          </Button>
        <Button variant="info" onClick={closeAddModal}>
          Add
          </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddModal;
