import React, {useState, useEffect} from 'react'
import {Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Styles/AdminDashboard.css';
import axios from 'axios';

const AdminDashboard = () =>{

    //const location= useLocation();

    const [name, setName]= useState('');
    const [image1, setImage1]= useState('');
    const [image2, setImage2]= useState('');
    const [image3, setImage3]= useState('');

    useEffect(()=>{
        axios.get("https://api.unsplash.com/search/photos?query=Employee&client_id=b22qrZaFio90pLIUVzM-rctB2gNBSl4vzifqiRJCoHA").then((res)=>{
            setImage1(res.data.results[1].urls.small);
            console.log(res.data.results);
        })
    },[])

    useEffect(()=>{
        axios.get("https://api.unsplash.com/search/photos?query=Employee&client_id=b22qrZaFio90pLIUVzM-rctB2gNBSl4vzifqiRJCoHA").then((res)=>{
            setImage2(res.data.results[8].urls.small);
            console.log(res.data.results);
        })
    },[])

    useEffect(()=>{
        axios.get("https://api.unsplash.com/search/photos?query=Employee&client_id=b22qrZaFio90pLIUVzM-rctB2gNBSl4vzifqiRJCoHA").then((res)=>{
            setImage3(res.data.results[9].urls.small);
            console.log(res.data.results);
        })
    },[])

    return(
        <div>
            <h5 className='h5'>Admin Dashboard</h5>
            <br />
            <div className='flex-container'>
        <div className='individual-card-leftmost'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image1} />
      <Card.Body>
        <Card.Title>Manage Employees</Card.Title>
        <Card.Text>
          Manage Employees in your organization. You can add delete and update employee details here!!
        </Card.Text>
        <Link className='btn btn-primary' to="/employees">Manage Employees</Link>
      </Card.Body>
    </Card>
        </div>
        <div className='individual-card'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Card.Title>Leaves Record</Card.Title>
        <Card.Text>
          See leaves record of employees of your organisation. This is important for attendence.
        </Card.Text>
        <Link className='btn btn-primary' to="/employee-leaves">Leaves Record</Link>
      </Card.Body>
    </Card>
    </div>
    <div className='individual-card'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image3} />
      <Card.Body>
        <Card.Title>Manage Tax Details</Card.Title>
        <Card.Text>
        Manage Tax details of employees of your organisation. You can view and add Tax details of employees.
        </Card.Text>
        <Link className='btn btn-primary' to="/tax-list">Tax Record</Link>
      </Card.Body>
    </Card>
    </div>
    
      </div>
        </div>
    );
}

export default AdminDashboard;