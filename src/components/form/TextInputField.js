import React, { Component } from "react";
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from '../../styles/colors';

export default class InputField extends React.Component {

  render() {
    const { labelText } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>{labelText}</Text>
        <TextInput
          style={styles.inputField}
        />
      </View>
    );
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingBottom: 10,
  },
  labelText: {
    fontWeight: '600',
  },
  inputField: {
    borderBottomWidth: 1,
    paddingTop: 1,
    paddingBottom: 5,
  }
});
