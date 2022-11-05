import * as React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const InputView = props => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 30}}>
      <Text style={{fontSize: 20, color: 'black'}}>{props.text}</Text>
      <TextInput {...props} style={styles.textInput} />
    </View>
  );
};

const SignUpPage = ({navigation}) => {
  const [account, onChangeAccount] = useState('');
  const [name, onChangeName] = useState('');
  const [mail, onChangeMail] = useState('');
  const [password, onChangePassword] = useState('');
  const [password2, onChangePassword2] = useState('');
  const [accountWrongState, setAccountWrongState] = useState(true);
  const [passwordWrongState, setPasswordWrongState] = useState(true);
  const [password2WrongState, setPassword2WrongState] = useState(true);

  const inputAccount = account => {
    if (account.search(/[^A-Za-z0-9_.]/) != -1) {
      console.log('帳號只能使用英文字母、數字、底線和句點。');
      setAccountWrongState(false);
    } else {
      onChangeAccount(account);
      setAccountWrongState(true);
    }
    console.log(accountWrongState);
    console.log(account);
  };

  const inputPassword = password => {
    if (password.search(/[^A-Za-z0-9_]/) != -1) {
      console.log('密碼只能使用英文字母、數字、底線。');
      setPasswordWrongState(false);
    } else {
      onChangePassword(password);
      setPasswordWrongState(true);
    }
  };

  const submitButton = () => {
    if (password2 !== password) setPassword2WrongState(false);
    else setPassword2WrongState(true);
    if (
      (accountWrongState && passwordWrongState && password2WrongState) !== true
    ) {
      navigation.navigate('loginScreen');
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'black', fontSize: 50}}>Sign Up</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <InputView
            text={'帳　　號 :'}
            onChangeText={account => inputAccount(account)}
            value={account}
            keyboardType="email-address"
            // {...console.log(account)}
          />
          {/* 帳號格式錯誤訊息 */}
          {accountWrongState ? null : (
            <Text style={styles.wrongText}>
              帳號只能使用英文字母、數字、底線和句點。
            </Text>
          )}
          <InputView
            text={'名　　稱 :'}
            onChangeText={name => onChangeName(name)}
            value={name}
          />

          <InputView
            text={'信　　箱 :'}
            onChangeText={mail => onChangeMail(mail)}
            value={mail}
          />
          <InputView
            secureTextEntry={true}
            text={'密　　碼 :'}
            onChangeText={password => inputPassword(password)}
            value={password}
          />
          {passwordWrongState ? null : (
            <Text style={styles.wrongText}>
              密碼只能使用英文字母、數字、底線。
            </Text>
          )}
          <InputView
            secureTextEntry={true}
            text={'確認密碼 :'}
            onChangeText={password2 => onChangePassword2(password2)}
            value={password2}
          />
          {password2WrongState ? null : (
            <Text style={styles.wrongText}>輸入密碼不同!</Text>
          )}
          <View style={{marginTop: 30}}>
            <TouchableOpacity style={styles.button} onPress={submitButton}>
              <Text style={styles.buttonText}>送出</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 30,
    width: 190,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 5,
    color: 'black',
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 10,
  },
  wrongText: {
    color: 'red',
    alignSelf: 'flex-end',
  },
  button: {
    height: 30,
    width: 100,
    borderWidth: 1,
    borderColor: '#555',
    backgroundColor: '#d1ddf9',
    borderRadius: 5,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUpPage;
