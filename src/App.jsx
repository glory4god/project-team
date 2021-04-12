import React from 'react';
import { Route } from 'react-router';
import styled from 'styled-components';
import Main from './components/Main';
import Gugudan from './components/Gugudan';

const Root = styled.div``;

const App = () => {
  return (
    <Root>
      {/* <Route path="/" component={Main}></Route> */}
      <Route path="/" component={Gugudan}></Route>
    </Root>
  );
};

export default App;
