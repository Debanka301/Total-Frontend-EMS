import React, {useState, useEffect} from 'react'
import { Link,useParams} from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService'

const UserProfile = () =>{

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [age, setAge] = useState('')
    const [role, setRole] = useState('')

    const {id} = useParams();

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

    return(
    <div className = "container">
            <h2 className = "text-center"> Your Profile </h2>
            <br></br>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Employee Id </th>
                    <th> Employee Name </th>
                    <th> Employee Age </th>
                    <th> Employee Address </th>
                    <th> Employee Role </th>
                    <th> Action </th>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{address}</td>
                        <td>{role}</td>
                        <td><Link className='btn btn-info' to={`/user-addEdit/${id}`}>Update</Link></td>
                    </tr>
                </tbody>
            </table>
            <Link className='btn btn-info mb-2' to="/user-dashboard" state={{id}}>Go To Dashboard</Link>
        </div>
    )


}

export default UserProfile;