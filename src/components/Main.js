import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import profileImg from '../assets/profile.png'

const ProfileInfo = styled.main`
  margin: 20px 400px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  .profileImg {
    margin: 20px 50px;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
  }
  .userInfo {
    div {
      width: 300px;
      margin-left: 100px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      button {
        margin: 10px;
      }
    }
    .userData {
      width: 250px;
      h5 span {
        font-weight: bolder;
      }
    }
  }
`

const Main = ({ cantImg }) => {
  return (
    <ProfileInfo>
      <div className='profileImg'>
        <img src={profileImg} alt={'foto de perfil'} />
      </div>
      <div className='userInfo'>
        <div>
          <h4>sylvanas_windrunner</h4>
          <Button mensaje='edit profile' />
        </div>
        <div className='userData'>
          <h5><span>5</span> posts</h5>
          <h5><span>296</span> followers</h5>
          <h5><span>269</span> following</h5>
        </div>
        <div className='userInfo'>
          <h4>sylvanas</h4>
        </div>
      </div>
    </ProfileInfo>
  );
}

export default Main;