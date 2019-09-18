import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editEmployee, setEditEmployee] = useState([]);

  const openAddModal = (props) => {
    setAddModal(true);
  }

  const closeAddModal = () => setAddModal(false);

  const openEditModal = (employee) => {
    setEditModal(true);
    setEditEmployee(employee);
  };

  const closeEditModal = () => setEditModal(false);


  return (
    <ModalContext.Provider
      value={{ addModal, editModal, editEmployee, openAddModal, openEditModal, closeAddModal, closeEditModal }}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider;