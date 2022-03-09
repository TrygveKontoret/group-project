import React from 'react';
import Nav from '../../components/Nav';
import { useForm } from 'react-hook-form';
import { yupRessolver } from '@hookform/resolvers/yup';
import { userLoginSchema } from '../../utils/yupSchemas';
import axios from 'axios';


const Login = () => {
  return (
    
    <>
        <Nav title='Login' />
        
    </>
  )
}

export default Login;