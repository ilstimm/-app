import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import resumeData from '../resume.json';

const ResumeForm = ({resume, navigation}) => {
  const onPressResumeDetail = () => {
    navigation.navigate('resumeDetailScreen', resume);
  };
  return (
    <TouchableOpacity style={styles.resumeDetail} onPress={onPressResumeDetail}>
      <View style={styles.resumeFormView}>
        <View style={[styles.resumeItem, {flex: 2}]}>
          <Text style={styles.resumeFormTitle}>{resume.title}</Text>
        </View>
        <View style={[styles.resumeItem, {opacity: 0, flex: 1}]}></View>
        <View style={[styles.resumeItem, {flex: 2}]}>
          <View></View>
          <View></View>
          <View></View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const SearchSceen = ({navigation}) => {
  const [dataList, setDataList] = useState('');
  const [searchData, setSearchData] = useState('');
  const url = 'http://localhost:8080/Informations';
  const options = {
    method: 'GET',
  };
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      setDataList(data);
    });
  return (
    <SafeAreaView style={styles.SView}>
      <View style={styles.searchView}>
        <TextInput
          style={styles.searchInput}
          placeholder=" 搜尋欄"
          onChangeText={value => setSearchData(value)}
        />
      </View>
      <View style={styles.resumeView}>
        <View style={styles.resumeFormsListView}>
          <FlatList
            data={dataList}
            renderItem={({item}) =>
              item.user === 'ilstim' || 1 === 1 ? (
                <ResumeForm resume={item} navigation={navigation} />
              ) : (
                <></>
              )
            }
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchSceen;

const styles = StyleSheet.create({
  SView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  searchView: {
    flex: 0.8,
    backgroundColor: '#d1ddf9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resumeView: {
    flex: 5,
    backgroundColor: '#FFC',
    alignItems: 'center',
  },
  searchInput: {
    width: '70%',
    height: '50%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    fontSize: 20,
    margin: 10,
  },
  resumeFormsListView: {
    width: '98%',
    backgroundColor: '#FAC',
  },
  resumeFormView: {
    margin: '1%',
    height: 150,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#DBDBDB',
  },
  resumeFormTitle: {
    fontSize: 25,
    fontWeight: '900',
    color: '#FFF',
  },
  resumeItem: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#999',
  },
  resumeDetail: {
    flex: 1,
  },
});
