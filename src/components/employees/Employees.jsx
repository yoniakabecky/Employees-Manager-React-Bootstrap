import React from 'react';
import { Table, Container, Form } from 'react-bootstrap';
import FetchEmployees from './FetchEmployees';
import './employees.css';


const Employees = () => {
  return (
    <Container >
      <Table striped hover>
        <thead>
          <tr>
            <th><Form.Check onClick={(e) => console.log(e)} /></th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <FetchEmployees />
      </Table>
    </Container>
  );
}

export default Employees;
