import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EmployerSearchNavigator from './Employer/searchScreens/EmployerSearchNavigator';
import EmployerChatScreen from './Employer/EmployerChatScreen';
import JoblistNavigator from './Employer/JoblistScreens/JoblistNavigator';
import EmployerPIScreen from './Employer/EmployerPIScreen';

const Tab = createBottomTabNavigator();
const EmployerScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Search') {
            iconName = 'search-outline';
          } else if (route.name === 'Chat') {
            iconName = 'chatbubble-ellipses-outline';
          } else if (route.name === 'Joblist') {
            iconName = 'document-outline';
          } else if (route.name === '我是雇主') {
            iconName = 'person';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Search" component={EmployerSearchNavigator} />
      <Tab.Screen name="Chat" component={EmployerChatScreen} />
      <Tab.Screen name="Joblist" component={JoblistNavigator} />
      <Tab.Screen name="我是雇主" component={EmployerPIScreen} />
    </Tab.Navigator>
  );
};

export default EmployerScreen;

const styles = StyleSheet.create({});
