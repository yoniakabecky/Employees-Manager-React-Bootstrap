import React, { useContext } from 'react';
import { Navbar, Button, Container, Form } from 'react-bootstrap';
import { ModalContext } from '../../contexts/ModalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './nabBar.scss';

const NavBar = () => {
  const { openAddModal } = useContext(ModalContext);

  return (
    <Navbar className="navbar-bg-color" variant="dark">
      <Container>
        <Navbar.Brand>Manage <strong>Employees</strong></Navbar.Brand>
        <Form inline>
          <Button variant="danger" className="navBtn" onClick={() => console.log('delete clicked')}>
            <FontAwesomeIcon icon={faMinusCircle} className="circle-icons" />
            Delete
            </Button>
          <Button variant="success" className="navBtn" onClick={() => openAddModal()}>
            <FontAwesomeIcon icon={faPlusCircle} className="circle-icons" />
            Add New Employee
            </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;