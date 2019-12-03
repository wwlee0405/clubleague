import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

export default class FeedDateAddressSection extends React.Component {

  render() {
    const { icon, topText, bottomText } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.flexWrap}>
          <Feather name={icon} size={25} style={styles.img} />
          <View style={styles.textWrap}>
            <Text style={styles.topText}>{topText}</Text>
            <Text style={styles.bottomText}>{bottomText}</Text>
          </View>
        </View>
      </View>
    );
  }
}

FeedDateAddressSection.propTypes = {
  icon: PropTypes.string.isRequired,
  topText: PropTypes.string,
  bottomText: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  flexWrap: {
    flexDirection: 'row'
  },
  img:{
    color: colors.green01,
  },
  textWrap: {
    paddingLeft: 10,
  },
  topText: {
    fontWeight: 'bold'
  },
  bottomText: {
    color: colors.darkGrey,
  },
});
