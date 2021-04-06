import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

const Content = ({ props }) => {
  return (
    <Root>
      <article>
        <h2>{props.title}</h2>
        {props.desc}
      </article>
    </Root>
  );
};

export default Content;
