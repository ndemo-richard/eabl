import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 200px;
  height: 55px;
  background-color:red;
  padding:0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Eabl
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
