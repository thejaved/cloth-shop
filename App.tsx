import React from 'react';
import {Provider} from 'react-redux';
import store from './app/store/store';
import {MainNavigator} from './app/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
