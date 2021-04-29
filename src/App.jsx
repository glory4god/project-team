import React from 'react';
import { Route } from 'react-router';
import styled from 'styled-components';
import Main from './components/Main';
import GameMain from './gamecomponents/GameMain';
import Gugudan from './gamecomponents/Gugudan';
import WordRelay from './gamecomponents/WordRelay';

const Root = styled.div``;

const App = () => {
  return (
    <Root>
      <Route path="/" component={GameMain}></Route>
      <Route path="/gugudan" component={Gugudan}></Route>
      <Route path="/wordrelay" component={WordRelay}></Route>
    </Root>
  );
};

export default App;
