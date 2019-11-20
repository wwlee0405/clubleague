import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from '../../styles/colors';

export default class FeedMatchBoxItem extends React.Component {

  render() {
    const { onPress, title, clubName, borderLine, labelColor, entry } = this.props;
    const borderColor = borderLine || colors.yellow;
    const color = labelColor || colors.yellow;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[{ borderColor }, styles.box]}
          onPress={onPress}
        >
          <Text style={[{ color }, styles.labelText]}>{title}</Text>
          <Text style={styles.clubName}>{clubName}</Text>
        </TouchableOpacity>

        <View style={{ paddingLeft: 10 }}>
          <Text style={{ width: 60, justifyContent: 'center', alignItems: 'center' }}><Text>{entry}</Text> Entry</Text>
        </View>

        <View style={{ paddingLeft: 10 }}>
          <TouchableOpacity style={{ width: 80, height: 40, borderRadius: 8, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.blue }}>
            <Text style={{ color: colors.white, alignItems: 'center' }}>참석</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

FeedMatchBoxItem.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
  clubName: PropTypes.string,
  borderLine: PropTypes.string,
  labelColor: PropTypes.string,
  entry: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  box: {
    flexDirection: 'row',
    width: 220,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    paddingLeft: 10,
  },
  labelText: {
    fontSize: 10,
  },
  clubName: {
    paddingLeft: 10,
  },
});
