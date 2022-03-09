import React from 'react';
import Nav from '../../components/Nav';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { Link } from 'react-router-dom';


const Admin = () => {
    const [error, setError] = useState();
    const navigate = useNavigate();
    const [auth, setAuth] = useContext(AuthContext);

    if (error) {
        return (
            <div>
                <h2>Must be logged inn to view page</h2>
                <Link to='/login'>Login</Link>
            </div>
        )
    }


  return (
    <>
        <Nav title='Admin page' />
    </>
  )
}

export default Admin