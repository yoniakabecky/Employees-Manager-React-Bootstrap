import * as React from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalContext } from '../../contexts/ModalContext';

import './employees.css';

const DisplayEmployees = ({ employees, deleteEmployee, selectedEmployees, allCheck }) => {
  const { openEditModal, checkedEmployees } = React.useContext(ModalContext);

  // const handleAllCheck = () => {

  // }

  // const handleCheckBox = (e, employee) => {
  //   let temp = checkedEmployees;
  //   e.target.temp
  //     ? temp.push(employee._id)
  //     : temp.splice(temp.indexOf(employee._id), 1);
  //   selectedEmployees(temp);
  // }

  return (
    <tbody>
      {employees.map(employee => (
        <tr key={employee._id}>
          <td>
            <Form.Check
            // checked={allCheck ? true : employee.checked}
            // onChange={(e) => handleCheckBox(e, employee)}
            /></td>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.address}</td>
          <td>{employee.phone}</td>
          <td>
            <button className="actionBtn text-warning" onClick={() => openEditModal(employee)}><FontAwesomeIcon icon={faPen} /></button>
            <button className="actionBtn text-danger" onClick={() => deleteEmployee(employee)}><FontAwesomeIcon icon={faTrash} /></button>
          </td>
        </tr>
      ))}
    </tbody >
  );
}

export default DisplayEmployees;
