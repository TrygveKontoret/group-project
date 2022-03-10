import React from 'react';
import Nav from '../../components/Nav';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import useToggle from '../../hooks/useToggle';


const Admin = () => {
    const [error, setError] = useState();
    const navigate = useNavigate();
    const [auth, setAuth] = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [isTriggered, setIsTriggered] = useToggle();

    const http = useAxios();

    useEffect(() => {
        const fetchData = async () => {
            const data = await http.get('/auth/local');
            setBookings(data.data.data);
        };

        fetchData().catch((error) => setError(error.response.data.error));
    }, [isTriggered, auth]);

    if (error) {
        return (
            <>
            <Nav title='Admin page' />
            <div>
                <h2>Must be logged inn to view page</h2>
                <h4>The server responded with: {error.status} {error.message}</h4>
                <p>Please login:</p>
                <Link to='/login'>Login</Link>
            </div>
            </>
        )
    }

    const handleLogout = () => {
        setAuth(null);
        navigate('/login');
    }


  return (
    <>
        <Nav title='Admin page' />
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    </>
  )
}

export default Admin