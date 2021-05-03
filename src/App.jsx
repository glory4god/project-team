import React from 'react';
import { Route } from 'react-router';
import styled from 'styled-components';
import Main from './components/Main';
import UserLocation from './components/UserLocation';
import GameMain from './gamecomponents/GameMain';
import Gugudan from './gamecomponents/Gugudan';
import NumberBaseball from './gamecomponents/NumberBaseball';
import WordRelay from './gamecomponents/WordRelay';

const Root = styled.div``;

const App = () => {
  return (
    <Root>
      <Route path="/" component={GameMain}></Route>
      <Route path="/gugudan" component={Gugudan}></Route>
      <Route path="/wordrelay" component={WordRelay}></Route>
      <Route path="/numberbaseball" component={NumberBaseball}></Route>
      <Route path="/find" component={UserLocation}></Route>
    </Root>
  );
};

export default App;
