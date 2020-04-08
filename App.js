import React from 'react';
import { Home } from './components/Home';
import { Chat } from './components/Chat';
import { Router, Stack, Scene }  from 'react-native-router-flux';

//export default class App extends React.Component (ES6). ne pas oublier le render().

export default class App extends React.Component {
  render(){
  //composent React
  return (
    <Router>
      <Stack key="mainStack">
        <Scene key="home" component={Home} title="Home"/>
        <Scene key="chat" component={Chat} title="Chat de "/>
      </Stack>
    </Router>
  );
}
}

