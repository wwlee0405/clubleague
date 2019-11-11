import React, { Component } from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';
import ScheduleSectionList from '../items/ScheduleSectionList';

class ClubSchedule extends Component {
  render() {
    return (
      <View style={styles.sectionList}>
        <SectionList
          sections={[
            {title: 'SEP 2019', data: ['01', '02', '03']},
            {title: 'OCT 2019', data: ['01', '03', '15']},
            {title: 'NOV 2019', data: ['05', '15', '17', '25', '27', '29', '30']},
            {title: 'DEC 2019', data: ['05', '15', '17', '25', '27', '29', '30']},
          ]}
          renderItem={({item}) =>
            <ScheduleSectionList
              day={item}
              week="WED"
              title="Match"
              time="18:00"
              address="Barcelona, Spain"
            />
          }
          renderSectionHeader={({section}) =>
            <Text style={styles.sectionHeader}>{section.title}</Text>
          }
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

export default ClubSchedule;

const styles = StyleSheet.create({
  sectionList: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});
