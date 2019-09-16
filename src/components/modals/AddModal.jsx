import React, { useContext, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { ModalContext } from '../../contexts/ModalContext';
import { postData } from '../../store/useFetch';


const AddModal = () => {
  const { addModal, closeAddModal } = useContext(ModalContext);


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const styles = {
    footer: {
      backgroundColor: "#dee2e6"
    },
    cancelBtn: {
      width: "6rem",
      borderRadius: 0,
      borderColor: "#ccc",
    },
    addBtn: {
      width: "6rem",
      borderRadius: 0,
      border: "none",
      // backgroundColor: "#5BC0DF",
    },
  }

  const handleSubmit = e => {
    closeAddModal();
    e.preventDefault();

    const newEmployee = {
      name,
      email,
      address,
      phone
    }

    postData(newEmployee);
  };


  return (
    <Modal show={addModal} onHide={closeAddModal} >
      <Modal.Header closeButton>
        <Modal.Title>Add Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows="1" onChange={(e) => setAddress(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" onChange={(e) => setPhone(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer style={styles.footer}>
        <Button variant="light" onClick={closeAddModal} style={styles.cancelBtn}>
          Cancel
          </Button>
        <Button variant="info" onClick={handleSubmit} style={styles.addBtn}>
          Add
          </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddModal;
