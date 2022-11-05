import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ResumeDetailScreen = ({navigation, route}) => {
  return (
    <View>
      <Text>{route.params.title}</Text>
      <Text>{route.params.user}</Text>
      <Text>{route.params.name}</Text>
      <Text>{route.params.sex}</Text>
      <Text>{route.params.age}</Text>
      <Text>{route.params.type}</Text>
      <Text>{route.params.region}</Text>
    </View>
  );
};

export default ResumeDetailScreen;

const styles = StyleSheet.create({});
