import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EmployerJoblistScreen from './EmployerJoblistScreen';
import EmployerJobDetailScreen from './EmployerJobDetailScreen';

const JoblistNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="JoblistSc" component={EmployerJoblistScreen} />
      <Stack.Screen name="JoblistDetail" component={EmployerJobDetailScreen} />
    </Stack.Navigator>
  );
};

export default JoblistNavigator;

const styles = StyleSheet.create({});
