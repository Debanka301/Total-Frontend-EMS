import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import '../Styles/HeaderComponent.css';
import LoginComponent from './LoginComponent';
import { useState } from 'react';

const HeaderComponent = () => {

    const [loggedIn, setLoggedIn]= useState('')

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            setLoggedIn("Yes")
        }
        else{
            setLoggedIn("No")
        }
    },[])

    const isLoggedIn = () =>{
        if(loggedIn === "Yes"){
            return true
        }
        else{
            return false
        }
    }

    const logout = () =>{
        localStorage.removeItem('token');
        <LoginComponent />
    }


    return (
        <div>
            <header>
                <nav className = "navbar navbar-expand-md navbar-light bg-light">
                    <div>
                        <a href = "#" className = "navbar-brand">
                            Employee-Portal
                        </a>
                    </div>
                    {
                        isLoggedIn() ? (
                            <div className='right'>
                                <Button className='btn btn-danger' onClick={logout()}>Logout</Button>
                            </div>
                        ):(
                            <div></div>
                        )
                    }

                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent