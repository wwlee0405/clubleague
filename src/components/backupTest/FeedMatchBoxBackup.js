import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from '../../styles/colors';

import CreateMatchBox from '../form/CreateMatchBox';

export default ({ title, clubName, onPress, borderLine, labelColor, entry }) => (
  <View style={styles.container}>

    <CreateMatchBox title={title} clubName={clubName} onPress={onPress} borderLine={borderLine} labelColor={labelColor} />

    <View style={styles.rightSection}>
      <Text><Text>{entry}</Text> Entry</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  rightSection: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
