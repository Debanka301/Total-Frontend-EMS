import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';

const AddEditUser = () =>{
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [age, setAge] = useState('')
    const [role, setRole] = useState('')
    const [errorMessage, setErrorMessage]= useState('')

    const history = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {name, password, address, age, role}
        console.log(employee)

        if(id){
            if(name.trim()===''){
                setErrorMessage("Name Field cannot be blank");
            }
            else if(password.trim()===''){
                setErrorMessage("Password Field cannot be blank");
            }
            else if(address.trim()===''){
                setErrorMessage("Address Field cannot be blank");
            }
            else if(role.trim()===''){
                setErrorMessage("Role Field cannot be blank");
            }
            else{
                EmployeeService.updateEmployee(id, employee).then((response) => {
                    console.log(response.data)
                    alert("Your account is updated successfully!!")
                    setErrorMessage('');
                    history('/user-profile/'+id)
                }).catch(error => {
                    console.log(error)
                })

            }

        }
        //else{
        //     EmployeeService.createEmployee(employee).then((response) =>{

        //         console.log(response.data)
    
        //         history('/employees');
    
        //     }).catch(error => {
        //         console.log(error)
        //     })
        // }
        
    }

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) =>{
            setName(response.data.name)
            setPassword(response.data.password)
            setAddress(response.data.address)
            setAge(response.data.age)
            setRole(response.data.role)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }

    return (
        <div>
           <br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter name"
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => {setName(e.target.value);setErrorMessage('')}}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Password:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter password"
                                        name = "password"
                                        className = "form-control"
                                        value = {password}
                                        onChange = {(e) => {setPassword(e.target.value);setErrorMessage('')}}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Address:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter address"
                                        name = "address"
                                        className = "form-control"
                                        value = {address}
                                        onChange = {(e) => {setAddress(e.target.value);setErrorMessage('')}}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Age:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter age"
                                        name = "age"
                                        className = "form-control"
                                        value = {age}
                                        onChange = {(e) => {setAge(e.target.value);setErrorMessage('')}}
                                    >
                                    </input>
                                </div>

                                {/* <div className = "form-group mb-2">
                                    <label className = "form-label"> Role:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter role"
                                        name = "role"
                                        className = "form-control"
                                        value = {role}
                                        onChange = {(e) => {set(e.target.value);setErrorMessage('')}}
                                    >
                                    </input>
                                </div> */}
                                {errorMessage && <p style={{color:"red"}}>{errorMessage}</p>}
                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                                <Link to={`/user-profile/${id}`} className="btn btn-danger" style = {{marginLeft:"10px"}}> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddEditUser;