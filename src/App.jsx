import React from 'react';
import styled from 'styled-components';
import Subject from './components/Subject';
import TOC from './components/TOC';

const Root = styled.div``;

const App = () => {
  const [props, setProps] = React.useState({
    subject: { title: 'WEB', sub: 'World Wide Web!' },
    welcome: { title: 'Welcome', desc: 'Hello, React!!' },
    contents: [
      { id: 1, title: 'HTML', desc: 'HTML is HyperText ...' },
      { id: 2, title: 'CSS', desc: 'CSS is for design' },
      { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
    ],
  });

  return (
    <Root>
      <Subject title={props.subject.title} sub={props.subject.sub} onClick />
      {/* <Subject title={props.subject.title} sub={props.subject.sub} /> */}
      <TOC props={props} />
    </Root>
  );
};

export default App;
