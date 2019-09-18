import axios from 'axios';

export const API_URL = "https://employee-maneger-node.herokuapp.com/api/employees";
// export const API_URL = "http://localhost:5000/api/employees";

export const getData = async () => {
  let response;
  try {
    response = await axios(API_URL)
  } catch (error) {
    console.log('failed to get employees:', error)
    return
  }
  return response.data;
}

export const postData = async (newEmployee) => {
  try {
    await axios.post(API_URL, newEmployee)
  } catch (error) {
    console.log('failed to add an employee:', error)
    return
  }
}

export const putData = (employeeData) =>
  axios.put(API_URL, employeeData)
    .catch(err => console.log('failed to edit an employee:', err))


export const deleteData = (employee) =>
  axios.delete(API_URL + `/${employee._id}`)
    .catch(err => console.log('failed to delete employees:', err))
