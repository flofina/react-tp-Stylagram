import React from 'react';
import styled from 'styled-components';

import NavBar from './components/Nav';
import Main from './components/Main';
import Card from './components/Card';

// import profile from './assets/profile.png';

const Body = styled.div`
  font-family: none;
  background: #E9E9E9;
`

const Section = styled.section`
  margin: 20px 360px;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`

const Nav = styled.nav`
  background: #fff;
`

const App = () => {

  const feedsource = [
    {
      img: 'https://www.viajejet.com/wp-content/viajes/una-laguna-unica-en-jamaica-650x366.jpg',
      description: 'una laguna unica en jamaica',
      likes: '43',
      comments: '3',
      id: 0,
    },
    {
      img: 'https://www.viajejet.com/wp-content/viajes/los-arrecifes-de-coral-de-bunaken-indonesia-650x366.jpg',
      description: 'los arrecife -de coral de bunaken indonesia',
      likes: '313',
      comments: '10',
      id: 1,
    },
    {
      img: 'https://www.viajejet.com/wp-content/viajes/paisaje-nevado-en-el-parque-nacional-deogyusan-corea-del-sur-650x366.jpg',
      description: 'paisaje nevado en el parque nacional deogyusan corea del sur',
      likes: '29',
      comments: '2',
      id: 2,
    },
    {
      img: 'https://www.viajejet.com/wp-content/viajes/un-paisaje-de-vertigo-en-ronda-malaga-espana-650x366.jpg',
      description: 'un paisaje de vertigo en ronda malaga espana',
      likes: '18',
      comments: '2',
      id: 3,
    },
    {
      img: 'https://www.viajejet.com/wp-content/viajes/El-increible-paisaje-de-Semuc-Champey-Guatemala-650x366.jpg',
      description: 'El increible paisaje de Semuc Champey Guatemala',
      likes: '30',
      comments: '4',
      id: 4,
    },
  ];

  const cardImg = feedsource.map(imagen => imagen);

  return (
    <Body>
      <Nav>
        {
          <NavBar />
        }
      </Nav>
      <Main />
      <Section>
        <div>
        {
          cardImg.map((imagen, i) => <Card
            key={i}
            img={imagen.img}
            desc={imagen.description} />)
        }
        </div>
      </Section>
    </Body>
  );
}

export default App;