import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View, AppRegistry } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Footer from './component/Footer'
import DayCalendar from './component/DayCalendar'
import CycleSet from './component/CycleSet'

import CalendarHorizont from './component/CalendarHorizont'


  let d = new Date();
  let da = d.getDate();

 class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>{da}</Text>
        <DayCalendar />
        <Footer  navigation={this.props.navigation} />
      </View >
    );
  }
}
class Calendar extends React.Component {
 render() {
   return (
     <View style={styles.container}>
       <CalendarHorizont />

     </View >
   );
 }
}

const SimpleAppNavigator = createStackNavigator({
  Home: Home,
  Calendar: Calendar,
  CycleSet: CycleSet,
});

export default createAppContainer (SimpleAppNavigator);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae3f6',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
