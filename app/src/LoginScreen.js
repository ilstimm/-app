import React, {useState, createContext, useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUsername} from './redux/usernameSlice';

const LoginScreen = ({navigation}) => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [loginState, setLoginState] = useState(false);
  const dispatch = useDispatch();

  const onPressLogin = () => {
    dispatch(setUsername({username: account, password: password}));
    setLoginState(true);

    // if (account === '123' && password == '123') {
    navigation.navigate('candidateScreen');
    // }
  };
  const onPressRegister = () => {
    navigation.navigate('signUpPage');
  };
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.text}>登入XXX</Text>
      <TextInput
        style={styles.accountInput}
        placeholder=" Phone number or email"
        onChangeText={value => setAccount(value)}
      />
      <TextInput
        style={styles.passwordInput}
        placeholder=" Password"
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
      />
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={onPressRegister}>
          <Text style={styles.buttonText}>register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={onPressLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      {loginState ? (
        <>
          <Text>account: {account}</Text>
          <Text>password: {password}</Text>
        </>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  accountInput: {
    width: '60%',
    height: 50,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    fontSize: 15,
    margin: 10,
  },
  passwordInput: {
    width: '60%',
    height: 50,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    fontSize: 15,
    margin: 10,
  },
  buttonView: {
    width: '60%',
    height: '7%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    flex: 1,
    height: '80%',
    borderWidth: 1,
    borderColor: '#555',
    backgroundColor: '#d1ddf9',
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButton: {
    flex: 1,
    height: '80%',
    borderWidth: 1,
    borderColor: '#555',
    backgroundColor: '#d1ddf9',
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {},
});

export default LoginScreen;
