import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import logoImage from './images/logo.png';
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={logoImage} alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: rgb(98, 84, 243);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
    width: auto; // maintain aspect ratio
    max-width: 100%;
  }
`;
export default Header;