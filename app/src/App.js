import React, {useState, createContext, useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator';
import {Provider} from 'react-redux';
import store from './redux/store';
import NewInformation from './Candidate/ScanResumeScreen/NewInfomation';
import SignUpPage from './SignUpPage';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
      {/* {/* <NewInformation />
      {/* <SignUpPage /> */}
    </Provider>
    // <LoginScreen />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginbtn: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default App;
