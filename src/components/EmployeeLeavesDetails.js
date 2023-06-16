import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';

const EmployeeLeavesDetails = () => {

    const [name, setName] = useState('');

    const [leaves, setLeaves]= useState([]);

    const {id} = useParams();

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) =>{
            setName(response.data.name)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    
    useEffect(() => {

        getAllEmployeesLeaves();
    }, [])

    const getAllEmployeesLeaves= ()=>{
        EmployeeService.getEmployeesLeaves(id).then((response)=>{
            setLeaves(response.data.allLeaves);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List of Leaves of {name} </h2>
            <br></br>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Leave Id </th>
                    <th> Start Date </th>
                    <th> End Date </th>
                    <th> Reason </th>
                </thead>
                <tbody>
                    {
                        leaves.map(
                            l =>
                            <tr key = {l.leaveId}> 
                                <td> {l.leaveId} </td>
                                <td> {l.startDate} </td>
                                <td>{l.endDate}</td>
                                <td>{l.reason}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <br />
            <Link className='btn btn-primary' to="/employee-leaves">Go back</Link>
        </div>
    )

}

export default EmployeeLeavesDetails;