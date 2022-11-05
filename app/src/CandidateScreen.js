import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatScreen from './Candidate/ChatScreen';
import PIScreen from './Candidate/PIScreen';
import SearchScreenNavigator from './Candidate/searchScreen/SearchScreenNavigator';
import ScanNavigator from './Candidate/ScanResumeScreen/ScanNavigator';

const Tab = createBottomTabNavigator();
const CandidateScreen = () => {
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
          } else if (route.name === 'ScResume') {
            iconName = 'document-outline';
          } else if (route.name === '我是應徵者') {
            iconName = 'person';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Search" component={SearchScreenNavigator} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="ScResume" component={ScanNavigator} />
      <Tab.Screen name="我是應徵者" component={PIScreen} />
    </Tab.Navigator>
  );
};

export default CandidateScreen;

const styles = StyleSheet.create({});
