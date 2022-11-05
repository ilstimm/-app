import * as React from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import {CheckBox} from 'react-native-elements';
import SelectList from 'react-native-dropdown-select-list';
import {ScrollView} from 'react-native-gesture-handler';
import {Post} from './InformationMethod';
import {useSelector} from 'react-redux';
import SwitchSelector from 'react-native-switch-selector';

const InputView = props => (
  <View style={{padding: '5%'}}>
    <Text>{props.text}</Text>
    <TextInput {...props} style={[styles.textInput, props.style]} />
  </View>
);

const NewInformation = props => {
  const [name, onChangeName] = React.useState(''); // 姓名
  const [sex, setSex] = React.useState('');
  // const [value, setValue] = React.useState(''); // 性別
  const [age, onChangeAge] = React.useState(''); // 年齡
  const [title, onChangTitle] = React.useState(''); // 主旨
  const [type, setType] = React.useState(''); // 工作種類

  // 工作種類開始
  const [teacher, setTeacher] = React.useState(false);
  const [engineer, setEngineer] = React.useState(false);
  const [cleaner, setCleaner] = React.useState(false);
  const [other, setOther] = React.useState(false);
  // 工作種類結束

  const [region, setRegion] = React.useState(''); // 地區
  const [phone, onChangePhone] = React.useState(''); // 電話
  const [email, onChangeEmail] = React.useState(''); // 信箱
  const [education, setEducation] = React.useState(''); // 教育程度
  const [introduction, onChangeIntroduction] = React.useState(''); // 自我簡介

  const regionData = [
    {key: '1', value: '基隆'},
    {key: '2', value: '台北'},
    {key: '3', value: '新北'},
  ];
  const educationData = [
    {key: '1', value: '國小'},
    {key: '2', value: '國中'},
    {key: '3', value: '高中'},
    {key: '4', value: '大學'},
    {key: '5', value: '碩士'},
    {key: '6', value: '博士'},
  ];

  const username = useSelector(state => state.username);
  console.log(username.username);
  const user = username.username;

  return (
    <ScrollView style={styles.body}>
      <InputView
        text={'姓名'}
        onChangeText={text => onChangeName(text)}
        value={name}
        placeholder={'例: 黃提姆'}
      />
      <View style={{padding: '5%'}}>
        <Text>性別</Text>
        <SwitchSelector
          initial={0}
          onPress={sex => setSex(sex)}
          textColor="gray"
          buttonColor="gray"
          borderColor="gray"
          hasPadding
          options={[
            {label: '男', value: 'male'}, //images.feminino = require('./path_to/assets/img/feminino.png')
            {label: '女', value: 'female'}, //images.masculino = require('./path_to/assets/img/masculino.png')
          ]}
          testID="gender-switch-selector"
          accessibilityLabel="gender-switch-selector"
        />
      </View>
      <InputView
        text={'年齡'}
        onChangeText={text => onChangeAge(text)}
        value={age}
        placeholder={'例: 18'}
      />
      <InputView
        text={'主旨'}
        onChangeText={text => onChangTitle(text)}
        value={title}
        placeholder={'例: 數學家教'}
      />
      <View style={{padding: '5%'}}>
        <Text>工作種類</Text>
        <CheckBox
          title="家教"
          checked={teacher}
          onPress={() => {
            setTeacher(!teacher);
            setType('teacher');
          }}
          // checkedIcon = 'dot-circle-o'
          // uncheckedIcon = 'circle-o'
        />
        <CheckBox
          title="工程師"
          checked={engineer}
          onPress={() => {
            setEngineer(!engineer);
            setType('engineer');
          }}
          // checkedIcon="square"
          // uncheckedIcon="circle-o"
        />
        <CheckBox
          title="清潔人員"
          checked={cleaner}
          onPress={() => {
            setCleaner(!cleaner);
            setType('cleaner');
          }}
        />
        <CheckBox
          title="其他"
          checked={other}
          onPress={() => {
            setOther(!other);
            setType('other');
          }}
        />
      </View>
      <View style={{padding: '5%'}}>
        <Text>地區</Text>
        <SelectList data={regionData} setSelected={setRegion} />
      </View>
      <InputView
        text={'電話'}
        onChangeText={phone => onChangePhone(phone)}
        value={phone}
        placeholder={'例: 0900123456'}
      />
      <InputView
        text={'信箱'}
        onChangeText={email => onChangeEmail(email)}
        value={email}
        placeholder={'例: mashanghot@mail.ntou.edu.tw'}
      />
      <View style={{padding: '5%'}}>
        <Text>教育程度</Text>
        <SelectList data={educationData} setSelected={setEducation} />
      </View>
      <InputView
        text={'自我簡介'}
        onChangeText={introduction => onChangeIntroduction(introduction)}
        value={introduction}
        placeholder={'例: 我好帥'}
        multiline={true}
        style={[
          {
            height: 250,
            textAlignVertical: 'top',
            justifyContent: 'flex-start',
            paddingTop: 10,
            borderWidth: 1.5,
            borderRadius: 3,
          },
        ]}
      />
      <View style={styles.view}>
        <Button
          style={styles.button}
          onPress={() => {
            Post({
              user: user,
              title: title,
              name: name,
              sex: sex,
              age: age,
              type: type,
              region: region,
              phoneNumber: phone,
              email: email,
              introduction: introduction,
              education: education,
              createTime: '2022-10-18',
              refreshTime: '2022-10-18',
              order: title,
            });
            console.log(
              user,
              name,
              sex,
              age,
              title,
              teacher,
              engineer,
              cleaner,
              other,
              region,
              phone,
              email,
              education,
              introduction,
            );
            props.navigation.goBack();
          }}
          title="送出"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 5,
    flex: 1,
  },
  textInput: {
    height: 40,
    wight: '70%',
    fontSize: 15,
    borderBottomWidth: 1.5,
    borderColor: 'gray',
    padding: 0,
    paddingLeft: 10,
    color: 'black',
  },
});

export default NewInformation;
