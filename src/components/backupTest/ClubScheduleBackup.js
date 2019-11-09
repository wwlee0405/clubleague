import React, { Component } from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';

class ClubSchedule extends Component {
  render() {
    return (
      <View style={styles.clubScheduleSectionList}>
        <SectionList
          sections={[
            {title: 'SEP 2019', data: ['01', '02', '03']},
            {title: 'OCT 2019', data: ['01', '03', '15']},
            {title: 'NOV 2019', data: ['05', '15', '17', '25', '27', '29', '30']},
            {title: 'DEC 2019', data: ['05', '15', '17', '25', '27', '29', '30']},
          ]}
          renderItem={({item}) =>
          <View style={styles.clubScheduleWrap}>
            <View style={styles.clubScheduleLeftWrap}>
              <Text style={styles.clubScheduleLeftTop}>{item}</Text>
              <Text style={styles.clubScheduleLeftBottom}>WED</Text>
            </View>
            <View style={styles.clubScheduleRightWrap}>
              <Text style={styles.clubScheduleRightTop}>Match</Text>
              <Text style={styles.clubScheduleTime}>18:00</Text>
              <Text style={styles.clubScheduleRightBottom}>Barcelona, Spain</Text>
            </View>
          </View>
        }
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

export default ClubSchedule;

const styles = StyleSheet.create({
  clubScheduleSectionList: {
   flex: 1,
   paddingTop: 22
  },
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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
})
