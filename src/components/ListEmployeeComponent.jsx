// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {deleteEmployee, listEmployee} from "../services/EmployeeService.js";
import {useNavigate} from "react-router-dom";


const ListEmployeeComponent = () => {
    const [employees,setEmployees]=useState([])
    const navigator=useNavigate()

    useEffect(() => {
       getAllEmployees()
    }, []);

    function getAllEmployees(){
        listEmployee().then((response) => {
            setEmployees(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id) {
        console.log(id)
        deleteEmployee(id).then((response) => {
            console.log(response)
            getAllEmployees()

        }).catch(error=>{
            console.log(error)
        })


    }

    return (
        <div className="container">
            <h2 className="text-center mb-2">List Of Employees</h2>
            <button className="btn btn-primary" onClick={addNewEmployee} >Add Employee</button>
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email ID</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className="btn btn-info" onClick={()=>updateEmployee(employee.id)}>Update</button>
                            <button className="btn btn-danger " onClick={()=>removeEmployee(employee.id)} style={{marginLeft: "10px"}}>Delete</button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent