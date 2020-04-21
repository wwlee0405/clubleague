import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

export default class FeedCard extends React.Component {

  render() {
    const { onPress, profileOnPress, profileImg, user, address, bodyImg, bodyText, hits } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.profileWrap}>
          <TouchableOpacity
            style={styles.profileImgButton}
            onPress={profileOnPress}
          >
            <Image
              source={profileImg}
              style={styles.profileImg}
            />
          </TouchableOpacity>
          <View style={styles.profileTextWrap}>
            <Text style={styles.profileUserText}>{user}</Text>
            <Text>{address}</Text>
          </View>
        </View>

        <View>
          <Image
            style={styles.bodyImg}
            source={bodyImg}
          />
          <View style={styles.bodyText}>
            <Text>{bodyText}</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingLeft: 15, peddingRight: 15 }}>
          <View style={{ width: null, height: 25, borderRadius: 100 , backgroundColor: colors.green01 }}>
            <Text style={{ paddingLeft: 10, paddingRight: 10, color: colors.white }}>Soccer</Text>
          </View>
          <View style={{ width: null, height: 25, borderRadius: 100 , backgroundColor: colors.blue, marginLeft: 5 }}>
            <Text style={{ paddingLeft: 10, paddingRight: 10, color: colors.white }}>Osaka</Text>
          </View>
          <View style={{ width: null, height: 25, borderRadius: 20 , backgroundColor: colors.darkOrange, marginLeft: 5 }}>
            <Text style={{ paddingLeft: 10, paddingRight: 10, color: colors.white }}>Oct 20, 2019</Text>
          </View>
          <View style={{ width: null, height: 25, borderRadius: 20 , backgroundColor: colors.yellowGreen, marginLeft: 5 }}>
            <Text style={{ paddingLeft: 10, paddingRight: 10, color: colors.white }}>10:00~14:00</Text>
          </View>
        </View>

        <View style={{ flex: 1, paddingTop: 10, paddingLeft: 15 }}>
          <Text style={{ fontSize: 12 }}><Text>{hits}</Text>  Hits</Text>
          <Text note style={{ color: 'grey', fontSize: 12 }}>PM 5 : 20, Jan 15, 2019</Text>
        </View>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  profileWrap: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  profileImgButton: {
    paddingRight: 10,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  profileTextWrap: {
    justifyContent: 'center',
  },
  profileUserText: {
    fontWeight: 'bold',
  },
  bodyImg: {
    flex: 1,
    height: 180,
    width: null,
  },
  bodyText: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  replySection: {
    backgroundColor: colors.white03,
  },
});
