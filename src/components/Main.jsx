import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Content from './Content';
import Subject from './Subject';

const Root = styled.div``;

const Main = () => {
  const [props, setProps] = React.useState({
    subject: { title: 'WEB', sub: 'World Wide Web!' },
    welcome: { title: 'Welcome', desc: 'Hello, React!!' },
    contents: [
      { id: 1, title: 'HTML', desc: 'HTML is HyperText ...' },
      { id: 2, title: 'CSS', desc: 'CSS is for design' },
      { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
    ],
  });

  const [content, setContent] = React.useState(props.welcome);

  return (
    <Root>
      <Subject
        title={props.subject.title}
        sub={props.subject.sub}
        onClick={() => setContent(props.welcome)}
      />
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

export default Main;
