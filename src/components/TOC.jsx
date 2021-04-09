import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Content from './Content';

const Root = styled.div``;

const TOC = ({ props }) => {
  const [content, setContent] = React.useState(props.welcome);

  return (
    <Root>
      <ul>
        {props.contents.map((item, idx) => (
          <li key={idx}>
            <Link
              to={`/${idx + 1}.${item.title}`}
              onClick={() => setContent(props.contents[idx])}>
              {item.title}
            </Link>
            {/* <a
              href={`${item.id}.${item.title}`}
              onClick={() => setContent(props.contents[idx])}>
              {item.title}
            </a> */}
          </li>
        ))}
      </ul>
      <Content props={content} />
    </Root>
  );
};

export default TOC;
