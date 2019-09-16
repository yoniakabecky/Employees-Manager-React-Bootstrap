import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { useFetch, deleteData } from '../../store/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalContext } from '../../contexts/ModalContext';

import './employees.scss';


const FetchEmployees = () => {
  const { openEditModal } = useContext(ModalContext);
  const employees = useFetch();


  return (
    <tbody>
      {employees.map(employee => (
        <tr key={employee._id}>
          <td><Form.Check /></td>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.address}</td>
          <td>{employee.phone}</td>
          <td>
            <button className="actionBtn text-warning" onClick={() => openEditModal(employee)}><FontAwesomeIcon icon={faPen} /></button>
            <button className="actionBtn text-danger" onClick={() => deleteData(employee)}><FontAwesomeIcon icon={faTrash} /></button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default FetchEmployees;
