
import * as React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import InformationItem from './src/Candidate/ScanResumeScreen/InformationItem.js';
import NewInformation from './src/component/NewInfomation.js';

const Stack = createStackNavigator();


function ScreenA({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
  }

  return (
    <View style = {styles.body}>
      <View style = {styles.textInputView}>
        <Text style={styles.text}>
          Screen A
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => { onPressHandler() }}
          style = {styles.opacity}
        >
          <Text style={styles.text}>
            新增履歷
          </Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.informations}>
        <ScrollView showsVerticalScrollIndicator = {false}>
          <InformationItem />
        </ScrollView>
      </View>
      
      
    </View>
    
  )
}

function ScreenB({ navigation }) {

  const onPressHandler = () => {
    // navigation.navigate('Screen_A');
    navigation.goBack();
  }

  return (
    <View style={styles.body}>
      <NewInformation navigation = { navigation }/>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   header: () => null
        // }}
      >
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
        // options={{
        //   header: () => null
        // }}
        />
        <Stack.Screen
          name="Screen_B"
          component={ScreenB}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  textInputView: {
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  informations: {
    flex: 5,
    borderWidth: 1,
  },
  opacity: {
    alignItems: 'center',
    backgroundColor: "#DDDDDD",
    borderRadius: 10,
  }
})

export default App;