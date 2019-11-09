import React, { Component } from "react";
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from '../../styles/colors';

export default class CreateMatchBox extends React.Component {

  render() {
    const { onPress, title, borderLine, labelColor } = this.props;
    const borderColor = borderLine || colors.yellow;
    const color = labelColor || colors.yellow;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[{ borderColor }, styles.box]}
          onPress={onPress}
        >
          <Text style={[{ color }, styles.labelText]}>{title}</Text>
          <Text style={styles.userName}>Barcelona</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

CreateMatchBox.propTypes = {
  title: PropTypes.string.isRequired,
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
    width: 250,
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
  userName: {
    flex: 5,
    paddingLeft: 5,
  },
});
