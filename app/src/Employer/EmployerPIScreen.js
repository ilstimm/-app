import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const EmployerPIScreen = ({navigation}) => {
  const onPressSwitchMode = () => {
    navigation.replace('candidateScreen');
  };
  const onPressLogout = () => {
    navigation.replace('loginScreen');
  };
  return (
    <View style={{flex: 1}}>
      <Text>EmployerPIScreen</Text>
      <TouchableOpacity style={styles.buttons} onPress={onPressSwitchMode}>
        <Text style={styles.buttonText}>切換為應徵者模式</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={onPressLogout}>
        <Text style={styles.buttonText}>登出</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmployerPIScreen;

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#555',
    backgroundColor: '#d1ddf9',
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
