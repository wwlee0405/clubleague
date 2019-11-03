import React, { Component } from "react";
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

export default class SearchInput extends React.Component {

  render() {

    const { placeholderText } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Feather name="search" size={20} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={placeholderText}
          />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SearchInput.propTypes = {
  placeholderText: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    alignItems: 'center'
  },
  box: {
    flex: 9,
    flexDirection: 'row',
    width: 340,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  icon: {
    flex: 1,
    paddingLeft: 15,
  },
  input: {
    flex: 6,
  },
  btn: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    alignItems: 'center',
  },
});
