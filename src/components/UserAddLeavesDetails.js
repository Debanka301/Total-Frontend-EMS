import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';

const UserAddLeavesDetails = ()=>{
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [reason, setReason] = useState('')
    //const [id, setId] = useState('')
    const [errorMessage, setErrorMessage]= useState('')


    const {id}= useParams();
    console.log(id);

    const navigate= useNavigate();


    const saveLeaves = (t) =>{
        t.preventDefault();

        const leaves= {startDate, endDate, reason, id}

        console.log(leaves)

        if(startDate.trim() === ''){
            setErrorMessage("Start date field cannot be blank")
        }
        else if(endDate.trim() === ''){
            setErrorMessage("End Date field cannot be blank")
        }
        else if(reason.trim()===''){
            setErrorMessage("Reason field cannot be blank")
        }
        else{
            EmployeeService.saveLeaves(leaves).then((response) =>{

                console.log(response.data);
                alert("Your leave details are added!!")
                setEndDate('');
                setErrorMessage('')
                setReason('')
                setStartDate('')
                navigate("/user-addLeaves/"+id);
    
            }).catch(error => {
                console.log(error)
            })    

        }
        
    }

    const title = () => {

        return <h4>Add Leave</h4>
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
                                        value = {id}
                                        //onChange = {(e) => setId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Start date:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter start date of leave in yyyy-mm-dd format"
                                        name = "startDate"
                                        className = "form-control"
                                        value = {startDate}
                                        onChange = {(e) => {setStartDate(e.target.value);setErrorMessage('');}}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> End date:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter end date of leave in yyyy-mm-dd format"
                                        name = "endDate"
                                        className = "form-control"
                                        value = {endDate}
                                        onChange = {(e) => {setEndDate(e.target.value); setErrorMessage('')}}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Reason:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter reason of leave"
                                        name = "reason"
                                        className = "form-control"
                                        value = {reason}
                                        onChange = {(e) => {setReason(e.target.value); setErrorMessage('')}}
                                    >
                                    </input>
                                </div>
                                {errorMessage && <p style={{color:"red"}}>{errorMessage}</p>}
                                <button className = "btn btn-success" onClick = {(e) => saveLeaves(e)} >Submit </button>
                                <Link to={`/user-addLeaves/${id}`} className="btn btn-danger" style = {{marginLeft:"10px"}}> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )


}

export default UserAddLeavesDetails;