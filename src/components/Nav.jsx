import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledUl = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const StyledLink = styled(Link)`
    background-color: #b00b69;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px;
    border-radius: 8px;
    transition: 2s;


    /* &:hover {
        transform:rotate(360deg);
        transition: 1s;
    } */
`;

const Nav = ({title}) => {
  return (
    <>
        <StyledUl>
            <StyledLink to='/'>
                <li>Home</li>
            </StyledLink>
            <StyledLink to='/contact'>
                <li>Contact</li>
            </StyledLink>
            <StyledLink to='/admin'>
                <li>Admin</li>
            </StyledLink>
            <StyledLink to='/login'>
                <li>Login</li>
            </StyledLink>
        </StyledUl>
        <h1>{title}</h1>
    </>
  )
}

export default Nav;