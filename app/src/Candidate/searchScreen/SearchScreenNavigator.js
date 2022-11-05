import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchSceen from './SearchSceen';
import ResumeDetailScreen from './ResumeDetailScreen';

const SearchScreenNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="searchScreen"
        component={SearchSceen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="resumeDetailScreen"
        component={ResumeDetailScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default SearchScreenNavigator;

const styles = StyleSheet.create({});
