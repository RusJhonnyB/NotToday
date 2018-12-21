import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';



export default class CalendarHorizont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     days : ''
   }
 }
  render() {
    return (
      // кнопка календарь
      <View>
        <CalendarList

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
        <Text style={styles.textd}>Сегодня {this.state.days}</Text>
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
