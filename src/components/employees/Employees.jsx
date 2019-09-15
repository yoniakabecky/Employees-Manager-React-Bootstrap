import React, { useContext } from 'react';
import { Table, Container, Form } from 'react-bootstrap';
import { initialData } from '../../store/employees';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalContext } from '../../contexts/ModalContext';
import './employees.scss';


const Employees = () => {
  const { openEditModal } = useContext(ModalContext);
  return (
    <Container >
      <Table striped hover>
        <thead>
          <tr>
            <th><Form.Check /></th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {initialData.map((employee, index) => (
            <tr key={index}>
              <td><Form.Check /></td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.address}</td>
              <td>{employee.phone}</td>
              <td>
                <button className="actionBtn text-warning" onClick={() => openEditModal()}><FontAwesomeIcon icon={faPen} /></button>
                <button className="actionBtn text-danger" onClick={() => console.log('delete clicked')}><FontAwesomeIcon icon={faTrash} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Employees;
