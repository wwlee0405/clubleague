import React, { Component } from "react";
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from '../../styles/colors';

export default class SetDateBox extends React.Component {

  render() {
    const { title, conPaddingTop, boxFlex, boxHeight, boxWidth, boxBorderWidth, textPaddingLeft, borderLine, labelColor } = this.props;
    const paddingTop = conPaddingTop || 10;
    const flex = boxFlex || 6;
    const height = boxHeight || 45;
    const width = boxWidth || 250;
    const borderWidth = boxBorderWidth || 1;

    const paddingLeft = textPaddingLeft || 15;

    const borderColor = borderLine || colors.darkOrange;
    const color = labelColor || colors.darkOrange;

    return (
      <View style={[{ paddingTop }, styles.container]}>
        <TouchableOpacity
          style={[{ flex, height, width, borderWidth, borderColor }, styles.box]}
          onPress={() => alert("apply for match")}
        >
          <Text style={[{ color, paddingLeft }, styles.labelText]}>{title}</Text>
          <Text style={styles.date}>soccer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


SetDateBox.propTypes = {
  title: PropTypes.string,
  conPaddingTop: PropTypes.number,
  boxFlex: PropTypes.number,
  boxBorderWidth: PropTypes.number,
  boxHeight: PropTypes.number,
  boxWidth: PropTypes.number,
  boxBorderWidth: PropTypes.number,
  textPaddingLeft: PropTypes.number,
  borderLine: PropTypes.string,
  labelColor: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    height: 45,
  },
  box: {
    flexDirection: 'row',
    borderRadius: 100,
    alignItems: 'center',
  },
  labelText: {
    flex: 1,
    fontSize: 10,
  },
  date: {
    flex: 5,
    paddingLeft: 5,
  },
});
