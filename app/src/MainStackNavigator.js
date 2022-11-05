import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import CandidateScreen from './CandidateScreen';
import EmployerScreen from './EmployerScreen';
import SignUpPage from './SignUpPage';

const MainStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="loginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signUpPage"
        component={SignUpPage}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="candidateScreen"
        component={CandidateScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="employerScreen"
        component={EmployerScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({});
