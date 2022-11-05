import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ResumeDetailScreen = ({navigation, route}) => {
  return (
    <View>
      <Text>主旨: {route.params.title}</Text>
      <Text>user_id: {route.params.user}</Text>
      <Text>username: {route.params.name}</Text>
      <Text>性別: {route.params.sex}</Text>
      <Text>年齡: {route.params.age}</Text>
      <Text>工作種類: {route.params.type}</Text>
      <Text>地區: {route.params.region}</Text>
    </View>
  );
};

export default ResumeDetailScreen;

const styles = StyleSheet.create({});
