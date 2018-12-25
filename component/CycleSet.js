import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, TextInput, AsyncStorage } from 'react-native';
import DatePicker from 'react-native-datepicker';



export default class CycleSet extends React.Component {

    constructor (props) {
      super(props)
      this.state = {

        climaxDay:'', cycleDay:'',  cycleInt:'', mydate:"22.12.2018"

      }
    }

    render() {
      return (
        // кнопка календарь
        <View style={styles.cycle}>
          <Text> Продолжительность менструации </Text>
          <TextInput style={styles.cycleInput}
            placeholder="type here"
            onChangeText={cycleDay=> this.setState({cycleDay})}
          />
          <Text> Продолжительность менструационного цикла  </Text>
          <TextInput style={styles.cycleInput}
            placeholder="type here"
            onChangeText={cycleInt=> this.setState({cycleInt})}
          />
          <Text> Дата начала последней менструации </Text>
          <DatePicker
          style={{width: 200}}
          date={this.state.data}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          confirmBtnText="Принять"
          cancelBtnText="Отмена"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          minDate="01-01-2018"
          maxDate="01-01-2020"
          onDateChange={climaxDay => this.setState({climaxDay})}
          />
          <TouchableOpacity
          style={styles.btn}
          onPress={this.saveData}
          >
              <Text>Save</Text>
          </TouchableOpacity>
        </View>
      );
    }
    saveData =()=> {
      const {climaxDay, cycleDay, cycleInt} = this.state;
      // let MyArray = {climaxDay:climaxDay, cycleDay:cycleDay, cycleInt:cycleInt}
      // AsyncStorage.setItem('MyArray',JSON.stringify(MyArray));
      // let MArray = AsyncStorage.getItem('MyArray');
      // let i = JSON.parse(MArray);

      AsyncStorage.setItem('climaxDay', JSON.stringify(climaxDay));
      let CD = AsyncStorage.getItem('climaxDay');

      alert(CD.result + '' + cycleDay + '' + cycleInt)
    }

    addDays (date, days, cycle) {

      let result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    };

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
