import React, { useState } from 'react';
import { Table, Container, Form } from 'react-bootstrap';
import DisplayEmployees from './DisplayEmployees';
import './employees.css';


const Employees = ({ employees, deleteEmployee, deleteFewEmployees, selectedEmployees }) => {
  const [allCheck, setAllCheck] = useState(false);

  return (
    <Container >
      <Table striped hover>
        <thead>
          <tr>
            <th><Form.Check onChange={(e) => setAllCheck(e.target.checked)} /></th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <DisplayEmployees
          check={allCheck}
          employees={employees}
          deleteEmployee={deleteEmployee}
          deleteFewEmployees={deleteFewEmployees}
          selectedEmployees={selectedEmployees}
        />
      </Table>
    </Container>
  );
}

export default Employees;
