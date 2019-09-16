// import { useContext, useEffect, useState } from "react";
// import { EmployeesContext } from '../contexts/EmployeesContext';
import axios from 'axios';

export const API_URL = "https://employee-maneger-node.herokuapp.com/api/employees";
// export const API_URL = "http://localhost:5000/api/employees";

// export const useFetch = () => {
//   const { employees, getEmployeesData, setEmployees } = useContext(EmployeesContext);
//   const [data, setData] = useState([]);

//   // let ignore = false;

//   // async function fetchUrl() {
//   //   const result = await axios(API_URL);
//   //   if (!ignore) setData(result.data);
//   // }

//   useEffect(() => {
//     // async function fetchUrl() {
//     //   const response = await fetch(API_URL).catch(e => console.log(`error ${e}`));
//     //   const json = await response.json();
//     //   getEmployeesData(json);
//     // }

//     // fetchUrl();
//     getData().then(unko => setData(unko));
//     console.log(data);
//     // return () => { ignore = true; }
//   }, []);

//   return data;
// }

export const getData = async () => {
  let response;
  try {
    response = await axios(API_URL)
  } catch (error) {
    console.log('add modal err', error)
    return
  }
  return response.data;
}

export const postData = async (newEmployee) => {
  let response;

  try {
    response = await axios.post(API_URL, newEmployee)
  } catch (error) {
    console.log('add modal err', error)

    return
  }

  console.log(response.data);
}

export const putData = (employeeData) =>
  axios.put(API_URL, employeeData)
    // .then(response => console.log(response.data))
    .catch(err => console.log('edit modal err', err))


export const deleteData = (employee) =>
  axios.delete(API_URL + `/${employee._id}`)
    // .then(res => console.log(employee))
    .catch(err => console.log(err))
