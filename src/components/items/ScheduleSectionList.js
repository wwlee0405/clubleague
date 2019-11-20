import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from '../../styles/colors';

export default ({
  day,
  week,
  title,
  time,
  address
}) => (
  <View style={styles.clubScheduleWrap}>
    <View style={styles.clubScheduleLeftWrap}>
      <Text style={styles.clubScheduleLeftTop}>{day}</Text>
      <Text style={styles.clubScheduleLeftBottom}>{week}</Text>
    </View>
    <View style={styles.clubScheduleRightWrap}>
      <Text style={styles.clubScheduleRightTop}>{title}</Text>
      <Text style={styles.clubScheduleTime}>{time}</Text>
      <Text style={styles.clubScheduleRightBottom}>{address}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  clubScheduleWrap: {
    flex: 5,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  clubScheduleLeftWrap: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  clubScheduleLeftTop: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  clubScheduleLeftBottom: {
    fontSize: 12,
  },
  clubScheduleRightTop: {
    fontSize: 16,
  },
  clubScheduleTime: {
    fontSize: 18,
    color: colors.yellowGreen,
  },
  clubScheduleRightBottom: {
    fontSize: 14,
    color: colors.darkGrey,
  },
  clubScheduleRightWrap: {
    flex: 4,
    justifyContent: 'center',
  },
})
