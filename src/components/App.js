import React from 'react';
import NavBar from './layouts/NavBar';
import Employees from './employees/Employees';
import EditModal from './modals/EditModal';
import AddModal from './modals/AddModal';
import ModalContextProvider from '../contexts/ModalContext';
import EmployeesContextProvider from '../contexts/EmployeesContext';

function App() {
  return (
    <div>
      <EmployeesContextProvider>
        <ModalContextProvider>
          <NavBar />
          <Employees />
          <EditModal />
          <AddModal />
        </ModalContextProvider>
      </EmployeesContextProvider>
    </div>
  );
}

export default App;
