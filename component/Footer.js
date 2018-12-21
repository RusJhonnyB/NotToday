import React, {Component} from 'react'
import { TouchableOpacity, StyleSheet, View,  Image, AppRegistry } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
// Основной Футер приложения

export default class Footer extends React.Component {
  static navigationOptions = {
    header: 'Calendar'
    }
    render() {
      return (
        // кнопка календарь
        <View style={styles.footer}>
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Calendar')}>
              <Image source={require('./img/bicon.png')}  style={styles.img} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('CycleSet')}>
              <Image source={require('./img/bicon.png')}  style={styles.img}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
              <Image source={require('./img/bicon.png')}  style={styles.img}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
              <Image source={require('./img/bicon.png')}  style={styles.img}/>
          </TouchableOpacity>
        </View>
      );
    }
  }




const styles = StyleSheet.create({
  footer: {
    height:'15%',
    width:'100%',
    backgroundColor: '#f5b8d7',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', left: 0, right: 0, bottom: 0,
        flexDirection: 'row',
  },
  btn: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  img: {
    width:'80%',
    height: '60%',
  },
});
