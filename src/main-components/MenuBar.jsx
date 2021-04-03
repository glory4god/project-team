import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const Root = styled.div`
  position: fixed;
  width: 100%;

  z-index: 3;
  .title {
    font-size: 32px;
    font-weight: bold;
  }
  .name {
    font-size: 16px;
    font-weight: bold;
    padding-top: 0.7rem;
  }
  .top-menu {
    display: flex;
    justify-content: space-between;
    padding-left: 5rem;
    padding-right: 4rem;
    height: 4rem;
    padding-top: 1rem;
  }
  .MuiButton-root {
    color: white;
  }
  @media (max-width: 750px) {
    .top-menu {
      display: flex;
      justify-content: space-between;
      padding-left: 3.5rem;
      padding-right: 2rem;
      height: 3.4rem;
      padding-top: 0.5rem;
    }
  }
`;

const MenuBar = () => {
  return (
    <Root>
      <Paper className='top-menu'>
        <Link
          to='/'
          className='title'
          style={{ textDecoration: 'none', color: 'black' }}>
          TITLE
        </Link>
        <div className='name'>
          <span>유하영 </span>
          <span>이종원</span>
        </div>
      </Paper>
    </Root>
  );
};

export default MenuBar;
