import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import Main from './main-components/Main';
import MenuBar from './main-components/MenuBar';
import ToolA from './tool-components/ToolA';

const Root = styled.div``;

const App = () => {
  return (
    <Root>
      <MenuBar />
      <Route path='/' exact={true} component={Main} />
      <Route path='/tool1' component={ToolA} />
    </Root>
  );
};

export default App;
