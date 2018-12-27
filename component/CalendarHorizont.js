import React from 'react';
import { View, StyleSheet, Text, AsyncStorage } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';

import CycleSet from './CycleSet'

export default class CalendarHorizont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     days : ''
   }
  AsyncStorage.getItem('climaxDay').then(value => this.setState({ CD: value }));
  AsyncStorage.getItem('climaxDayS').then(value => this.setState({ CDD: value }));
 }
  render() {
    return (
      // кнопка календарь
      <View>
        <CalendarList
        markedDates={{
                [this.state.CD]:{selected: true, selectedColor: 'red'},
                [this.state.CDD]:{selected: true, selectedColor: 'red'},                
              }}
        style={{
            height:100
          }}

          horizontal={true}

          pagingEnabled={true}

          calendarWidth={320}

          onDayPress={(day) => {
            console.log('selected day', day.day)
            this.setState({
              days : day.day
             })
        }}
        />
        <Text style={styles.textd}>Сегодня {this.state.days}
        <Text> {this.state.CD} </Text>
        <Text> {this.state.CDD} </Text>
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  textd: {
    height:'30%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'gray',
    position: 'absolute', left: 0, right: 0, bottom: 0,
  },
});
