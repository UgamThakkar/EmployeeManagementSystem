import React, { useEffect } from 'react'
import { useState } from 'react'
import { listEmployees } from '../services/EmployeeService';
const ListEmployeeComponent = () => {
  const [ employees, setEmployees] = useState([]);

  useEffect(()=>{
    listEmployees().then((response)=>{
        listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(err => {
            console.log(err);
        })
    })
  }, [])


  return (
    <div className='container'>
        <h2 className='text-center'>List Of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee FirstName</th>
                    <th>Employee LastName</th>
                    <th>Employee Email</th>
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

                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent