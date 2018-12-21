import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';

import MyDatePicker from './DatePicker';


export default class CycleSet extends React.Component {
    state = {user: ''}
    updateUser = (language) => {
     this.setState({ language: language })
    }
    render() {
      return (
        // кнопка календарь
        <View style={styles.cycle}>
          <Text> Продолжительность менструации </Text>
          <TextInput style={styles.cycleInput}
            placeholder="type here"
          />
          <Text> Продолжительность менструационного цикла  </Text>
          <TextInput style={styles.cycleInput}
            placeholder="type here"
          />
          <Text> Дата начала последней менструации </Text>
          <MyDatePicker />
          <TouchableOpacity style={styles.btn} onPress={this.saveData}>
              <Text>Save</Text>
          </TouchableOpacity>
        </View>
      );
    }
    saveData () {
      alert('Test');
    }
  }




const styles = StyleSheet.create({
  cycle: {
    height: '90%' ,
    backgroundColor: '#f5b8d7',
    alignItems: 'center',
    justifyContent: 'center',

  },
  cycleInput: {
    height: '10%',
    width: '80%',
    color: '#607e85',
  },

});
