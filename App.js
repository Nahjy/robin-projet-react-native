import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { Router, Stack, Scene }  from 'react-native-router-flux';
import rootReducer from './reducers';
import { Home, Chat } from './components';


//export default class App extends React.Component (ES6). ne pas oublier le render().

const store = createStore(rootReducer);
export default class App extends React.Component {
  render(){
  //composent React
  return (
    <Provider store={store}>
    <Router>
      <Stack key="mainStack">
        <Scene key="home" component={Home} title="Home"/>
        <Scene key="chat" component={Chat} title="sallon"/>
      </Stack>
    </Router>
    </Provider>
  );
}
}

