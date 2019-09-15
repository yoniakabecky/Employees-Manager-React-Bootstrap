import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const openAddModal = () => setAddModal(true);
  const closeAddModal = () => setAddModal(false);
  const openEditModal = () => setEditModal(true);
  const closeEditModal = () => setEditModal(false);

  return (
    <ModalContext.Provider
      value={{ addModal, editModal, openAddModal, openEditModal, closeAddModal, closeEditModal }}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider;