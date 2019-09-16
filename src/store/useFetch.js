import { useContext, useEffect } from "react";
import { EmployeesContext } from '../contexts/EmployeesContext';
import axios from 'axios';

export const API_URL = "http://calm-taiga-51580.herokuapp.com/api/employees";
// export const API_URL = "http://localhost:5000/api/employees";

export const useFetch = () => {
  const { employees, getEmployeesData } = useContext(EmployeesContext);

  useEffect(() => {
    console.log('test')
    async function fetchUrl() {
      const response = await fetch(API_URL).catch(e => console.log(`error ${e}`));
      const json = await response.json();
      getEmployeesData(json);
    }

    fetchUrl();
  }, []);

  console.log('useFetch', employees);

  return employees;
}

export const postData = (newEmployee) => {
  axios.post(API_URL, newEmployee)
    .then(response => console.log(response.data))
    .catch(err => console.log('add modal err', err))
}

export const putData = (employeeData) => {
  axios.put(API_URL, employeeData)
    .then(response => console.log(response.data))
    .catch(err => console.log('edit modal err', err))
}

export const deleteData = (employee) => {
  axios.delete(API_URL + `/${employee._id}`)
    .then(res => console.log(employee))
    .catch(err => console.log(err))
}
