import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const NavBar = styled.nav`
  margin: 0px 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-family: 'Gotu', sans-serif;
  }
  Button {
    position: absolute;
    left: 45%;
  }
  .icon {
    width: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const Nav = () => {
  return (
    <NavBar>
        <h2>Stylagram</h2>
        <Button mensaje='search' />
        <div className="icon">
        <i className="fas fa-info-circle"></i>
        <i className="fas fa-heart"></i>
        <i className="fas fa-user"></i>
        </div>
    </NavBar>
  );
}

export default Nav;