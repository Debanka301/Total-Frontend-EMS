import React, {useState, useEffect} from 'react'
import {Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Styles/UserDashboard.css';
import axios from 'axios';
import HeaderComponent from './HeaderComponent';

const UserDashboard = () =>{

    const location= useLocation();
    const navigate = useNavigate();

    const [name, setName]= useState('');
    const [image1, setImage1]= useState('');
    const [image2, setImage2]= useState('');
    const [image3, setImage3]= useState('');

    const id= location.state.id;
    console.log(id);

    // useEffect(() =>{
    //   const token= localStorage.getItem('token');
    //   console.log(token);
    //   if(!token){
    //     navigate("/")
    //   }
    // },[])

    useEffect(() => {

      EmployeeService.getEmployeeById(id).then((response) =>{
        console.log(response);
          setName(response.data.name)
      }).catch(error => {
          console.log(error)
      })
  }, [])

        // async function fetchData(){
        // const response= await axios.get("https://api.unsplash.com/search/photos?query=Employee&client_id=b22qrZaFio90pLIUVzM-rctB2gNBSl4vzifqiRJCoHA");
        // console.log(response.data.results);
        // setImages(response.data.results);
        // }

        useEffect(()=>{
            axios.get("https://api.unsplash.com/search/photos?query=Employee&client_id=b22qrZaFio90pLIUVzM-rctB2gNBSl4vzifqiRJCoHA").then((res)=>{
                setImage1(res.data.results[1].urls.small);
                console.log(res.data.results);
            })
        },[])

        useEffect(()=>{
            axios.get("https://api.unsplash.com/search/photos?query=Employee&client_id=b22qrZaFio90pLIUVzM-rctB2gNBSl4vzifqiRJCoHA").then((res)=>{
                setImage2(res.data.results[3].urls.small);
                console.log(res.data.results);
            })
        },[])

        useEffect(()=>{
            axios.get("https://api.unsplash.com/search/photos?query=Employee&client_id=b22qrZaFio90pLIUVzM-rctB2gNBSl4vzifqiRJCoHA").then((res)=>{
                setImage3(res.data.results[5].urls.small);
                console.log(res.data.results);
            })
        },[])

    return(
        <div>

            <br />
            <h4 className='h5'>{name}'s Dashboard</h4>
            <div className='logout'>
            <Button variant='danger' onClick={()=>{
              localStorage.removeItem('token');
              navigate("/");
            }}>Logout</Button>
            </div>

            <br />

        {/* <Link className='btn btn-info' to={`/user-tax/${id}`}>See Tax</Link>
        <br></br>
        <Link className='btn btn-info' to={`/user-addLeaves/${id}`}>See Leaves</Link>
        <br></br>
        <Link className='btn btn-info' to={`/user-profile/${id}`}>See Profile</Link> */}

    <div className='flex-container'>
        <div className='individual-card-leftmost'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image1} />
      <Card.Body>
        <Card.Title>See your Leaves</Card.Title>
        <Card.Text>
          See and update your leaves that you have taken. This is important for attendance!!
        </Card.Text>
        <Link className='btn btn-primary' to={`/user-addLeaves/${id}`}>See Leaves</Link>
      </Card.Body>
    </Card>
        </div>
        <div className='individual-card'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Card.Title>Your Tax Details</Card.Title>
        <Card.Text>
          Check your tax details. It is based upon your CTC figure.
        </Card.Text>
        <br />
        <Link className='btn btn-primary' to={`/user-tax/${id}`}>See Tax</Link>
      </Card.Body>
    </Card>
    </div>
    <div className='individual-card'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image3} />
      <Card.Body>
        <Card.Title>Update Your Profile</Card.Title>
        <Card.Text>
        Update your own details like name, password, age, address as per your wish!!
        </Card.Text>
        <Link className='btn btn-primary' to={`/user-profile/${id}`}>See Profile</Link>
      </Card.Body>
    </Card>
    </div>
    
      </div>




        </div>
    );
}

export default UserDashboard;