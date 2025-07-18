import React, { useEffect } from 'react'
import { useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
const ListEmployeeComponent = () => {
  const [ employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(()=>{
    getAllEmployees();
  }, [])

  function getAllEmployees(){
    listEmployees().then((response)=>{
        listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(err => {
            console.log(err);
        })
    })
  }

  function addNewEmployee(){
    navigator('/add-employee');
  }

  function updateEmployee(id){
    navigator(`/edit-employee/${id}`)
  }

  function removeEmployee(id){
    console.log(id);
    deleteEmployee(id).then((response)=>{
        getAllEmployees();
    }).catch(err=>{
        console.log(err);
    })
  }
  return (
    <div className='container'>
        <h2 className='text-center'>List Of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee FirstName</th>
                    <th>Employee LastName</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=> updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={()=> removeEmployee(employee.id)}>Delete</button>

                            </td>

                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent