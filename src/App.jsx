import React from 'react';
import styled from 'styled-components';
import Content from './components/Content';
import Subject from './components/Subject';
import TOC from './components/TOC';

const Root = styled.div``;

const App = () => {
  const [props, setProps] = React.useState({
    subject: { title: 'WEB', sub: 'World Wid Web!' },
    welcome: { title: 'Welcome', desc: 'Hello, React!!' },
    contents: [
      { id: 1, title: 'HTML', desc: 'HTML is HyperText ...' },
      { id: 2, title: 'CSS', desc: 'CSS is for design' },
      { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
    ],
  });

  return (
    <Root>
      <h1>
        <a href="/">{props.subject.title}</a>
      </h1>
      {props.subject.sub}
      {/* <Subject title={props.subject.title} sub={props.subject.sub} /> */}
      <TOC props={props} />
      <Content props={props.welcome} />
    </Root>
  );
};

export default App;
