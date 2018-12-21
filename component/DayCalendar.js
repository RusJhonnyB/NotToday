import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

const locale = {
  name: 'fr',
  config: {
    months: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split(
      '_'
    ),
    monthsShort: 'Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек'.split(
      '_'
    ),
    weekdays: 'Понедельник_Вторник_Среда_Четверг_Пятница_Суббота_Воскресение'.split('_'),
    weekdaysShort: 'Пн_Вт_Ср_Чт_Пт_Сб_Вс'.split('_'),
    weekdaysMin: 'Пн_Вт_Ср_Чт_Пт_Сб_Вс'.split('_'),
  }
};





export default class DayCalendar extends React.Component {
  render() {
    return (
      // кнопка календарь
      <View style={styles.calendar}>
        <CalendarStrip
                    calendarAnimation={{type: 'sequence', duration: 30}}
                    daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white'}}
                    style={{width:'90%',height: 100, paddingTop: 20, paddingBottom: 10}}
                    calendarHeaderStyle={{color: '#344654'}}
                    dateNumberStyle={{color: '#344654'}}
                    dateNameStyle={{color: '#344654'}}
                    highlightDateNumberStyle={{color: 'yellow'}}
                    highlightDateNameStyle={{color: 'yellow'}}
                    disabledDateNameStyle={{color: 'grey'}}
                    disabledDateNumberStyle={{color: 'grey'}}
                    iconContainer={{flex: 0.1}}
                    locale={locale}
                    onDateSelected={(day)=> {
                      let days = 0;
                      if (day){let days = day};

                      console.log(days)
                    }}
                />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    height:'15%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', left: 0, right: 0, top: 20,
  },
});
