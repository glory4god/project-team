import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.ol`
  li {
    font-size: 2rem;
  }
  Link {
    text-decoration: none;
  }
`;

const GameMain = () => {
  return (
    <>
      <Menu>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/gugudan">Gugudan</Link>
        </li>
        <li>
          <Link to="/wordrelay">WordRelay</Link>
        </li>
      </Menu>
    </>
  );
};

export default GameMain;
