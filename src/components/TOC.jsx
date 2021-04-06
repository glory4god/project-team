import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

const TOC = ({ props }) => {
  return (
    <Root>
      <ul>
        {props.contents.map((item, idx) => (
          <li key={idx}>
            <a href={`${item.id}.${item.title}`} onClick>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </Root>
  );
};

export default TOC;
