import React from 'react';
import styled from 'styled-components';

const ButtonSearch = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  width: 150px;
  height: 30px;
  background-color: #FAFAFA;
  border: 1px solid #EAEAEA;
  border-radius: 5px;
`
const Button = ({mensaje}) => {
    
  return (
    <ButtonSearch>
      {mensaje}
    </ButtonSearch>
  )
}

export default Button;