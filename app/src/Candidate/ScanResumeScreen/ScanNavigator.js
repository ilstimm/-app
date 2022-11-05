import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, createContext, useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InformationItem from './InformationItem';
import NewInformation from './NewInfomation';

function ScreenA({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
  };

  return (
    <View style={styles.body}>
      <View style={styles.textInputView}>
        <Text style={styles.text}>Resume</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            onPressHandler();
          }}
          style={styles.opacity}>
          <Text style={styles.text}>新增履歷</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.informations}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <InformationItem />
        </ScrollView>
      </View>
    </View>
  );
}

function ScreenB({navigation}) {
  const onPressHandler = () => {
    // navigation.navigate('Screen_A');
    navigation.goBack();
  };

  return (
    <View style={styles.body}>
      <NewInformation navigation={navigation} />
    </View>
  );
}

const ScanNavigator = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Screen_A"
        component={ScreenA}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Screen_B"
        component={ScreenB}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ScanNavigator;

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
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
  },
});
