import React, {useEffect, useState} from 'react';
import {createEmployee, getEmployee, updateEmployee} from "../services/EmployeeService.js";
import {useNavigate,useParams} from "react-router-dom";


const EmployeeComponent = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const navigator=useNavigate()

    const {id}=useParams()

    const [errors,setErrors]=useState({firstName:'',lastName:'',email:''})

    function saveOrUpdateEmployee(e) {

        e.preventDefault()
        if(validateForm()){
            const employee={firstName,lastName,email}
            console.log(employee)
            if (id){
                updateEmployee(id, employee).then((response)=>{
                    console.log(response)
                    navigator('/employees')
                }).catch(error=>{
                    console.log(error)
                })
            }else {
                createEmployee(employee).then((response) => {
                    console.log(response.data)
                    navigator('/employees')
                }).catch(error=>{
                    console.log(error)
                })
            }
        }

    }
    function validateForm(){
        let valid=true
        const errorsCopy={...errors}
        if (firstName.trim()){
            errorsCopy.firstName=''

        }else {
            errorsCopy.firstName='First Name Is Required'
            valid=false
        }
        if (lastName.trim()){
            errorsCopy.lastName=''

        }else {
            errorsCopy.firstName='Last Name Is Required'
            valid=false
        }
        if (email.trim()){
            errorsCopy.email=''

        }else {
            errorsCopy.email='Email Is Required'
            valid=false
        }
        setErrors(errorsCopy)
        return valid
    }
    function pageTitle(){
        if (id) {
            return <h2 className="text-center"> Update Employee</h2>
        }else {
            return <h2 className="text-center"> Add Employee</h2>
        }
    }

    useEffect(() => {
        if (id){
            getEmployee(id).then((response) => {
                console.log(response)
                setFirstName(response.firstName)
                setLastName(response.lastName)
                setEmail(response.email)
            }).catch(error=>{
                console.log(error)
            })
        }
    }, [id]);

    function clearField() {

    }

    return (
        <div className="container">
            <br/><br/>
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    {pageTitle()}
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className='form-label' htmlFor="firstName">First Name</label>
                                <input type='text' placeholder="Enter Employee First Name" name='firstName'
                                       value={firstName} className={`form-control${errors.firstName ? 'is-invalid':''}`} onChange={(e)=>setFirstName(e.target.value)}/>
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className='form-label' htmlFor="lastName">Last Name</label>
                                <input type='text' placeholder="Enter Employee Last Name" name='lastName'
                                       value={lastName} className={`form-control${errors.lastName ? 'is-invalid':''}`} onChange={(e)=>setLastName(e.target.value)}/>
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className='form-label' htmlFor="email" >Email </label>
                                <input type='email' placeholder="Enter Employee Email " name='email'
                                       value={email}  className={`form-control${errors.email ? 'is-invalid':''}`} onChange={(e)=>setEmail(e.target.value)}/>
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>
                            <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                            <button className='btn btn-danger' onClick={clearField} style={{marginLeft:"20px"}}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent;