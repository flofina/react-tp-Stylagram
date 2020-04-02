import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 330px;
  height: 330px;
  margin: 30px;
  overflow: hidden;
  img {
    width: 100%;
    height: 330px;
  }
`

const Card = ({img, desc}) => {
  return (
    <CardContainer>
      <img src={img} alt={desc} />
    </CardContainer>
  );
}

export default Card;