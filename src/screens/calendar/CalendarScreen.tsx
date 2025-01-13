import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CalendarList } from 'react-native-calendars';

const PAST_RANGE = 24;
const FUTURE_RANGE = 24;

export const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <CalendarList
        pastScrollRange={PAST_RANGE}
        futureScrollRange={FUTURE_RANGE}
        firstDay={0}
        showSixWeeks={true}
        hideExtraDays={false}
        monthFormat="yyyy年 M月"
        horizontal={true}
        hideArrows={false}
        pagingEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
