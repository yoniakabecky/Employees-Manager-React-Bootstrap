import * as React from 'react';
import { Form } from 'react-bootstrap';
import { deleteData, getData } from '../../store/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalContext } from '../../contexts/ModalContext';

import './employees.css';

const FetchEmployees = () => {
  const { openEditModal } = React.useContext(ModalContext);
  const [employees, setData] = React.useState([]);

  React.useEffect(() => {
    getData().then(d => setData(d));
    return () => { };
  }, []);

  async function onDeleteButtonClick(e, employee) {
    await deleteData(employee);
    const employees = await getData();
    setData(employees);
  }

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
            <button className="actionBtn text-danger" onClick={e => onDeleteButtonClick(e, employee)}><FontAwesomeIcon icon={faTrash} /></button>
          </td>
        </tr>
      ))}
    </tbody >
  );
}

export default FetchEmployees;
