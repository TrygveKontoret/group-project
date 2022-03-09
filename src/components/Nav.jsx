import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//span,
// p {
//     font-family: "Inconsolata", monospace;
//https://fonts.google.com/specimen/Inconsolata?query=Inconsolata
//

//     color: white;
//   }

//   h1,
//   h2,
//   h3 {
//     font-family: "Outfit", sans-serif;
//     color: white;
//   }

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #89b5c3;
`;

//Color palette

// #80421B      #C4764A  #E5AA88    #89B5C3     #326580

const StyledLink = styled(Link)`
  background-color: #326580;
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

  &:hover {
    transform: rotate(360deg);
    transition: 2s;
  }
`;

const Nav = ({ title }) => {
  return (
    <>
      <StyledUl>
        <StyledLink to="/">
          <li>Home</li>
        </StyledLink>
        <StyledLink to="/contact">
          <li>Contact</li>
        </StyledLink>
        <StyledLink to="/admin">
          <li>Admin</li>
        </StyledLink>
        <StyledLink to="/login">
          <li>Login</li>
        </StyledLink>
      </StyledUl>
      <h1>{title}</h1>
    </>
  );
};

export default Nav;
