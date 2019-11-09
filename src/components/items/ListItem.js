import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from '../../styles/colors';

export default ({
  onPress,
  profileImg,
  user,
  address 
}) => (
  <View style={styles.playersWrap}>

    <View style={styles.playersLeftWrap}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={profileImg}
          style={styles.playersImg}
        />
      </TouchableOpacity>
    </View>

    <View style={styles.playersRightWrap}>
      <Text style={styles.playersRightTextTop}>{user}</Text>
      <Text style={styles.playersRightTextBottom}>{address}</Text>
    </View>

  </View>
);

const styles = StyleSheet.create({
  playersWrap: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  playersLeftWrap: {
    alignItems: 'center',
    paddingLeft: 10,
  },
  playersImg: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  playersRightWrap: {
    paddingLeft: 20,
    justifyContent: 'center',
  },
  playersRightTextTop: {
    fontWeight: 'bold',
  },
  playersRightTextBottom: {
    color: colors.darkGrey,
    fontSize: 14,
  },
});
