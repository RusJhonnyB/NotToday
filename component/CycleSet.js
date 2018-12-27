import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, TextInput, AsyncStorage } from 'react-native';
import DatePicker from 'react-native-datepicker';



export default class CycleSet extends React.Component {

    constructor (props) {
      super(props)
      this.state = {

        climaxDay:'', cycleDay:'',  cycleInt:'', mydate:"2018.12.27"

      }
      // AsyncStorage.getItem('climaxDay').then(value => this.setState({ CD: value }));
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
          format="YYYY-MM-DD"
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
          minDate="2018-01-01"
          maxDate="2020-01-01"
          onDateChange={climaxDay => this.setState({climaxDay})}
          />
          <TouchableOpacity
          style={styles.btn}
          onPress={this.saveData}
          >
              <Text>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.btn}
          onPress={this.showData}
          >
              <Text>Show</Text>
          </TouchableOpacity>
          <Text> {this.state.CD} </Text>
        </View>
      );
    }
    saveData =()=> {
      const {climaxDay, cycleDay, cycleInt} = this.state;
      AsyncStorage.setItem('climaxDay', climaxDay);

      // AsyncStorage.getItem('climaxDayS').then(value => this.setState({ CDD: value }));
      // AsyncStorage.getItem('climaxDay').then(value => this.setState({ CD: value }));

      let cdd = new Date(climaxDay.replace(/(.d+)-(.d+)-(.d+)/, '$2.$3.$1'));
      let d = new Date(cdd);
      for ( let i=1; i<5; i++){
        d.setDate(cdd.getDate()+i);
        let dataString  = d.getFullYear() + "-" +  (d.getMonth()+1) + "-" + d.getDate();
        console.log(dataString);
        AsyncStorage.setItem('climaxDayS', dataString);
      };

    }
    showData = () => {
      if (this.state.CD){
          alert(this.state.CD);
        }
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
  btn: {
    margin:20
  }

});
