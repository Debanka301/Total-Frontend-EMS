import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';
import TaxValidation from '../Validators/TaxValidation';

const AddTaxDetails = () =>{

    const [empId, setEmpId] = useState('')
    const [salary, setSalary] = useState('')

    const {id} = useParams();
    const navigate= useNavigate();

    const [errorMesage, setErrorMessage] = useState('')

    const saveOrUpdateTax = (t) =>{
        t.preventDefault();

        const taxInput= {empId, salary}

        console.log(taxInput);

        if(empId.trim() === ''){
            setErrorMessage("Employee Id field cannot be blank!")
        }
        else if(salary.trim() === ''){
            setErrorMessage("Salary field cannot be blank!")
        }
        else{
            EmployeeService.saveTax(taxInput).then((response) =>{

                console.log(response.data);
                alert("Tax details added!!")
                setEmpId("");
                setSalary("")
                setErrorMessage("")
                navigate('/tax-list')
    
    
            }).catch(error => {
                console.log(error)
            })

        }
    }

    const title = () => {
            return <h2 className = "text-center">Add Tax Details</h2>
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
                                    <label className = "form-label"> Employee Id :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter employee id"
                                        name = "empId"
                                        className = "form-control"
                                        value = {empId}
                                        onChange = {(e) => {setEmpId(e.target.value);setErrorMessage('')}}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Salary:</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter salary"
                                        name = "salary"
                                        className = "form-control"
                                        value = {salary}
                                        onChange = {(e) => {setSalary(e.target.value);setErrorMessage('')}}
                                    >
                                    </input>
                                </div>
                                {errorMesage && <p style={{color:"red"}}>{errorMesage}</p>}
                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateTax(e)} >Submit </button>
                                <Link to="/tax-list" className="btn btn-danger" style = {{marginLeft:"10px"}}> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )

}

export default AddTaxDetails;