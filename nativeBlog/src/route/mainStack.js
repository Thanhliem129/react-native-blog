import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider} from 'native-base';
import MainTab from './mainTab';
import Login from '../components/profile/login';
import ResetPassword from '../components/profile/resetPassword';
import ChangePassword from '../components/profile/changePassword';
import SignUp from '../components/profile/singUp';
import VerificationCode from '../components/profile/verificationCode';
import ProfileInfo from '../components/profile/profileInfo';

import OnBoarding from '../components/boarding/onBoarding';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider >
        <Stack.Navigator
         screenOptions={{
          headerMode:'none'
         }}>
           {/* Homepage */}
          <Stack.Screen name='MainTab' component={MainTab}/>
          
          {/* Profile */}
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='ResetPassword' component={ResetPassword}/>
          <Stack.Screen name='ChangePassword' component={ChangePassword}/>
          <Stack.Screen name='SignUp' component={SignUp}/>
          <Stack.Screen name='VerificationCode' component={VerificationCode}/>
          <Stack.Screen name='ProfileInfo' component={ProfileInfo}/>
          <Stack.Screen name='OnBoarding' component={OnBoarding}/>
         
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  )
};

export default MainStack;