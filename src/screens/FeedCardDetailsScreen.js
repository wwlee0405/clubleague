import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';


import FeedCardDetails from "../components/contents/FeedCardDetails";


export default class FeedCardDetailsScreen extends React.Component {

  render() {
    const { navigation, onPress, profileImg, user, address, bodyImg, bodyText, matchDetailsOnPress, hits } = this.props;
    return (
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
      >
        <FeedCardDetails
          onPress={() => navigation.navigate('Profile')}
          profileImg={require('../data/ImgTest/dddd.jpg')}
          user="Lionel Messi"
          address="Buenos Aires, Argentina"
          bodyImg={require('../data/ImgTest/bbbb.jpg')}
          bodyText="캄프누에서 뛸 매치상대구합니다."
          matchDetailsOnPress={() => navigation.navigate('Details')}
          hits="150"
        />
      </ScrollView>
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
    width: 55,
    height: 55,
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
