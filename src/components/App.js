import React from 'react';
import NavBar from './layouts/NavBar';
import Employees from './employees/Employees';
import EditModal from './modals/EditModal';
import AddModal from './modals/AddModal';
import ModalContextProvider from '../contexts/ModalContext';

function App() {
  return (
    <div>
      <ModalContextProvider>
        <NavBar />
        <Employees />
        <EditModal />
        <AddModal />
      </ModalContextProvider>
    </div>
  );
}

export default App;
