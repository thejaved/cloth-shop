import React from 'react';
import {Provider} from 'react-redux';
import {MainNavigator} from './app/navigation';
import store, {persistor} from './app/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
