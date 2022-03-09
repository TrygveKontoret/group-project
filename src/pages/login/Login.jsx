import React, { useContext, useEffect } from 'react';
import Nav from '../../components/Nav';
import { useForm } from 'react-hook-form';
import { yupResolver, yupRessolver } from '@hookform/resolvers/yup';
import { userLoginSchema } from '../../utils/yupSchemas';
import axios from 'axios';
import { useNavigate } from 'react-router';
import AuthContext from '../../context/AuthContext';


const Login = () => {

  const navigate = useNavigate();

  const [auth, setAuth] = useContext(AuthContext);

  useEffect(()=> {
    console.log(auth);

  }, []);

  const{
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userLoginSchema),
  });

  const loginUser = async (formData) => {
    const responseData = await axios.post(AUTH_URL, {
      indetifier: formData.email,
      password: formData.password,
    });

    console.log('Response Data:', responseData);

    setAuth(responseData.data.jwt);
    navigate('/admin');
  };

  const onSubmit = (formData) => {
    console.log('Form Data: ', formData);

    loginUser(formData).catch(console.error);
  };

  
  return (

    
    
    <>
        <Nav title='Login' />
        
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} placeholder='Your email...' />
        {errors.email && <span>{errors.email.message}</span>}

        <input
          {...register('password')}
          type='password'
          placeholder='Your password...'
        />
        {errors.password && <span>{errors.password.message}</span>}

        <button>Login</button>
      </form>
        
    </>
  )
}

export default Login;