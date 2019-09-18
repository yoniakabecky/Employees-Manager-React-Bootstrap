import React, { useContext, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { ModalContext } from '../../contexts/ModalContext';


const EditModal = ({ employees, handleEditEmployee }) => {
  const { editModal, closeEditModal, editEmployee } = useContext(ModalContext);

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
    saveBtn: {
      width: "6rem",
      borderRadius: 0,
      border: "none",
      // backgroundColor: "#5BC0DF",
    },
  }

  const handleSubmit = e => {
    closeEditModal();
    e.preventDefault();

    const employeeData = {
      id: editEmployee._id,
      name: name !== "" ? name : editEmployee.name,
      email: email !== "" ? email : editEmployee.email,
      address: address !== "" ? address : editEmployee.address,
      phone: phone !== "" ? phone : editEmployee.phone,
      checked: false,
    }

    handleEditEmployee(employeeData);
  };


  return (
    <Modal show={editModal} onHide={closeEditModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" value={name === "" ? editEmployee.name : name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email === "" ? editEmployee.email : email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows="1" value={address === "" ? editEmployee.address : address} onChange={(e) => setAddress(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" value={phone === "" ? editEmployee.phone : phone} onChange={(e) => setPhone(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer style={styles.footer}>
        <Button variant="light" onClick={closeEditModal} style={styles.cancelBtn}>
          Cancel
          </Button>
        <Button variant="info" onClick={handleSubmit} style={styles.saveBtn}>
          Save
          </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
