import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Root = styled.div``;

const Subject = ({ title, sub, onClick }) => {
  return (
    <Root>
      <h1>
        <Link to="/" onClick={onClick}>
          {title}
        </Link>
      </h1>
      {sub}
    </Root>
  );
};  

export default Subject;