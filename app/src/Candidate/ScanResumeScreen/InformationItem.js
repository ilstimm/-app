import React, {useState} from 'react';
import {StyleSheet, View, Text, Switch} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Post, Delete} from './InformationMethod.js';
import {useSelector} from 'react-redux';

export default function InformationItem() {
  const [returnValue, setReturnValue] = useState('');
  const username = useSelector(state => state.username);
  const url = 'http://localhost:8080/Informations/' + username.username;
  const options = {
    method: 'GET',
  };
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      let a = data.map((information, index) => (
        <View
          key={index}
          style={{
            backgroundColor: '#ff6',
            marginLeft: 10,
            marginRight: 10,
            elevation: 20,
            marginTop: 10,
            borderWidth: 2,
            borderColor: 'gray',
          }}>
          <InformationText
            title={information.title}
            refreshTime={information.refreshTime}
          />
          <InformationButton
            user={information.user}
            order={information.order}
          />
        </View>
      ));
      setReturnValue(a);
    });
  return returnValue;
}

const InformationText = props => {
  const [resumeState, setResumeState] = useState(false);
  const toggleSwitch = () => setResumeState(previousState => !previousState);
  // console.log(resumeState, props.title);
  return (
    <View>
      <Text style={{fontSize: 25}}>{props.title}</Text>
      <Text>更新時間: {props.refreshTime}</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={resumeState ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={resumeState}
      />
    </View>
  );
};

const InformationButton = props => {
  const [user, setUser] = useState(props.user);
  const [order, setorder] = useState(props.order);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        // flexWrap: 'wrap',
      }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Delete(user, order);
        }}>
        <Text style={{fontSize: 30}}>刪除</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        // onPress = {""}
      >
        <Text style={{fontSize: 30}}>修改</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 160.3,
    height: 60,
    alignItems: 'center',
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
