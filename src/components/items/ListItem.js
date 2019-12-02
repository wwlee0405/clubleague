import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from '../../styles/colors';

export default ({
  onPress,
  profileImg,
  user,
  address
}) => (
  <View style={styles.container}>

    <View style={styles.leftWrap}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={profileImg}
          style={styles.img}
        />
      </TouchableOpacity>
    </View>

    <View style={styles.rightWrap}>
      <Text style={styles.rightTextTop}>{user}</Text>
      <Text style={styles.rightTextBottom}>{address}</Text>
    </View>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  leftWrap: {
    alignItems: 'center',
    paddingLeft: 10,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  rightWrap: {
    paddingLeft: 20,
    justifyContent: 'center',
  },
  rightTextTop: {
    fontWeight: 'bold',
  },
  rightTextBottom: {
    color: colors.darkGrey,
    fontSize: 14,
  },
});
