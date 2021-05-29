import React from 'react';
import { Route } from 'react-router';
import styled from 'styled-components';
import UserLocation from './user-location/UserLocation';
import GameMain from './game-components/GameMain';
import Gugudan from './game-components/Gugudan';
import NumberBaseball from './game-components/NumberBaseball';
import ResponseTimeCheck from './game-components/ResponseTimeCheck';
import WordRelay from './game-components/WordRelay';
import RSP from './game-components/RSP';

const Root = styled.div``;

const App = () => {
  return (
    <Root>
      {/* <UserLocation /> */}
      <Route path="/" component={GameMain}></Route>
      <Route path="/gugudan" component={Gugudan}></Route>
      <Route path="/wordrelay" component={WordRelay}></Route>
      <Route path="/numberbaseball" component={NumberBaseball}></Route>
      <Route path="/find" component={UserLocation}></Route>
      <Route path="/response" component={ResponseTimeCheck}></Route>
      <Route path="/rsp" component={RSP}></Route>
    </Root>
  );
};

export default App;
