import React, { useState, useEffect } from 'react';
import NavBar from './layouts/NavBar';
import Employees from './employees/Employees';
import EditModal from './modals/EditModal';
import AddModal from './modals/AddModal';
import ModalContextProvider from '../contexts/ModalContext';
import { getData, deleteData, postData, putData } from '../store/useFetch';

function App() {
  const [employees, setEmployees] = useState([]);
  const [checkedEmployees, setCheckedEmployees] = useState([]);

  useEffect(() => {
    getData().then(d => setEmployees(d));
    return () => { };
  }, []);

  async function handleEditEmployee(employee) {
    await putData(employee);
    const newEmployees = await getData();
    setEmployees(newEmployees);
  }

  async function addEmployee(employee) {
    await postData(employee);
    const newEmployees = await getData();
    setEmployees(newEmployees);
  }

  async function deleteEmployee(employee) {
    await deleteData(employee);
    const newEmployees = await getData();
    setEmployees(newEmployees);
  }

  async function deleteFewEmployees(checkedEmployees) {
    await checkedEmployees.map(employee => deleteData(employee))
    const newEmployees = await getData();
    setEmployees(newEmployees);
  }

  const selectedEmployees = (arr) => setCheckedEmployees(arr);

  return (
    <div>
      <ModalContextProvider>
        <NavBar
          employees={employees}
          deleteFewEmployees={deleteFewEmployees}
        />
        <Employees
          employees={employees}
          deleteEmployee={deleteEmployee}
          selectedEmployees={selectedEmployees}
        />
        <EditModal
          employees={employees}
          handleEditEmployee={handleEditEmployee}
        />
        <AddModal
          employees={employees}
          addEmployee={addEmployee}
        />
      </ModalContextProvider>
    </div>
  );
}

export default App;
