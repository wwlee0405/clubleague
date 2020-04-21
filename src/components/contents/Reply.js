import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

export default class Reply extends React.Component {

  render() {
    const { onPress, profileImg, user, text, time } = this.props;
    return (
      <View style={styles.replyWrap}>

        <View style={styles.rightWrap}>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={profileImg}
              style={styles.img}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.bodyWrap}>
          <View style={styles.bodyTop}>
            <Text style={styles.user}>{user}</Text>
            <Text style={styles.time}>AM 12:00</Text>
          </View>
          <Text style={styles.reply}>ekmslgmslgmsssssssssssssssssssssssssssssssssssssssl</Text>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  replyWrap: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  rightWrap: {
    alignItems: 'center',
    paddingLeft: 15,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  bodyWrap: {
    paddingLeft: 10,
  },
  bodyTop: {
    flexDirection: 'row',
  },
  user: {
    fontWeight: 'bold',
  },
  time: {
    color: colors.darkGrey,
    paddingLeft: 10,
  },
  reply: {
    paddingRight: 80,
  },
});
