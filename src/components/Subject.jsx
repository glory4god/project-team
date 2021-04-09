import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

const Subject = ({ title, sub }) => {
  return (
    <Root>
      <h1>
        <a href="/">{title}</a>
      </h1>
      {sub}
    </Root>
  );
};

export default Subject;
