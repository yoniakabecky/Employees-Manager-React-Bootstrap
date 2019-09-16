import React, { createContext, useState } from 'react';

export const EmployeesContext = createContext();

const EmployeesContextProvider = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployeesData = (data) => {
    setEmployees(data);
  }

  return (
    <EmployeesContext.Provider value={{ employees, setEmployees, getEmployeesData }}>
      {props.children}
    </EmployeesContext.Provider>
  )
}

export default EmployeesContextProvider;