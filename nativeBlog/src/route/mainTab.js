import React from 'react';
import { Image } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../assets/images/logo_hoplong.png'

import Home from '../screens/home';
import Search from '../screens/search';
import Notification from '../screens/notification';
import Profile from '../screens/profile';

const Tab = createBottomTabNavigator();

const MainTab = () => {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      screenOptions={{
        tabBarActiveTintColor: '#048ad1',
        inactiveTintColor: 'gray',
        style: {backgroundColor: 'white',},
      }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({color, size}) => <Image source={Logo} style={{width:50, height:35}}/>,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Tìm kiếm',
            tabBarIcon: ({color, size}) => <Icon name="ios-search" size={size} color={color}/>,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: 'Thông báo',
            tabBarIcon: ({color, size}) => <Icon name="ios-notifications-outline" size={size} color={color}/>,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Cá nhân',
            tabBarIcon: ({color, size}) => <Icon name="ios-person-outline" size={size} color={color}/>,
            headerShown: false,
          }}
        />
    </Tab.Navigator>
  )
};

export default MainTab;