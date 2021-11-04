import React, {useState} from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import redux from './redux/index';
import 'react-native-gesture-handler';
import FlashMessage from "react-native-flash-message";
import MainStack from './route/mainStack';
import Splash from './screens/layout/splash';

const App = () => {

  // const [loading, setLoading] = useState(true);

  // setTimeout(() => {
  //   setLoading(false)
  // }, 1000);
  // if(loading) {
  //   return <Splash />
  // }

  return (
    <Provider store={redux.store}>
      <PersistGate loading={null} persistor={redux.persistor}>
        <MainStack/>
        <FlashMessage position="top"/>
      </PersistGate>
    </Provider>
  )
};

export default App;