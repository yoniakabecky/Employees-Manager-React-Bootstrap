import React, { useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { ModalContext } from '../../contexts/ModalContext';

const EditModal = () => {
  const { editModal, closeEditModal } = useContext(ModalContext);

  return (
    <Modal show={editModal} onHide={closeEditModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Employee</Modal.Title>
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
        <Button variant="secondary" onClick={closeEditModal}>
          Close
          </Button>
        <Button variant="info" onClick={closeEditModal}>
          Save
          </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
