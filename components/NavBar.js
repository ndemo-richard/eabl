import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background-color:transparent;
  padding:0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
    color:#fff;
    margin-left:10rem;
  }
  @media (max-width:768px){
   .logo{
   margin:0;
   }
   }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        EABL
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
