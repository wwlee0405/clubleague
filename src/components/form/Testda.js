import React, { Component } from "react";
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from '../../styles/colors';

export default class SetDateBox extends React.Component {

  render() {
    const { title, boxWidth, borderLine, labelColor } = this.props;
    const width = boxWidth || 250;
    const borderColor = borderLine || colors.darkOrange;
    const color = labelColor || colors.darkOrange;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[{ boxWidth, borderColor }, styles.box]}
          onPress={() => alert("apply for match")}
        >
          <Text style={[{ color }, styles.labelText]}>{title}</Text>
          <Text style={styles.date}>Oct 20, 2020</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

SetDateBox.propTypes = {
  title: PropTypes.string,
  boxWidth: PropTypes.number,
  borderLine: PropTypes.string,
  labelColor: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    paddingTop: 10,
  },
  box: {
    flex: 6,
    flexDirection: 'row',
    height: 45,
    borderRadius: 100,
    alignItems: 'center',
    borderWidth: 1,
  },
  labelText: {
    flex: 1,
    paddingLeft: 15,
    fontSize: 10,
  },
  date: {
    flex: 5,
    paddingLeft: 5,
  },
});