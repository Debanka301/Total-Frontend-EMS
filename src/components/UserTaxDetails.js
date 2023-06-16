import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';

const UserTaxDetails = () =>{

    const [name, setName] = useState('');

    const [tax, setTax]= useState({});

    const {id} = useParams();

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) =>{
            setName(response.data.name)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    useEffect(() => {

        getEmployeesTaxDetails();
    }, [])

    const getEmployeesTaxDetails =()=>{
        EmployeeService.getEmployeesTax(id).then((response)=>{
            setTax(response.data)
            console.log(response.data);
            console.log(tax)
        }).catch(error=>{
            console.log(error);
        })
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> Tax Details of {name} </h2>
            <br></br>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Employee Id </th>
                    <th> Employee Name </th>
                    <th> Salary </th>
                    <th> Tax Percentage </th>
                    <th> Tax Amount </th>
                    <th> Inhand </th>
                </thead>
                <tbody>
                    <tr>
                        <td>{tax.empId}</td>
                        <td>{name}</td>
                        <td>{tax.salary}</td>
                        <td>{tax.taxPerc}</td>
                        <td>{tax.taxAmount}</td>
                        <td>{tax.inHand}</td>
                    </tr>
                    <br></br>
                    <Link className='btn btn-info mb-2' to="/user-dashboard" state={{id}}>Go To Dashboard</Link>
                </tbody>
            </table>
        </div>
    )


    



}

export default UserTaxDetails;