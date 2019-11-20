import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, View, TouchableOpacity, DatePickerAndroid } from "react-native";
import colors from '../../styles/colors';

export default class SetDateBox extends React.Component {

  state = {
    presetDate: new Date(2020, 4, 5),
    simpleDate: new Date(2020, 4, 5),
    spinnerDate: new Date(2020, 4, 5),
    calendarDate: new Date(2020, 4, 5),
    defaultDate: new Date(2020, 4, 5),
    simpleText: 'pick a date',
    spinnerText: 'pick a date',
  };

  showPicker = async (stateKey, options) => {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Cannot open date picker '${stateKey}': `, message);
    }
  };

  render() {
    const { title, borderLine, labelColor } = this.props;
    const borderColor = borderLine || colors.darkOrange;
    const color = labelColor || colors.darkOrange;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[{ borderColor }, styles.box]}
          onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}
        >
          <Text style={[{ color }, styles.labelText]}>{title}</Text>
          <Text style={styles.date}>{this.state.simpleText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

SetDateBox.propTypes = {
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
  date: {
    flex: 5,
    paddingLeft: 5,
  },
});
