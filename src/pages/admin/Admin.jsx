import React from 'react';
import Nav from '../../components/Nav';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';


const Admin = () => {
    const [error, setError] = useState();
    const navigate = useNavigate();


  return (
    <>
        <Nav title='Admin page' />
    </>
  )
}

export default Admin