import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

import SetSportBox from "../form/SetSportBox";

import FeedDateAddressSection from "../items/FeedDateAddressSection";
import FeedMatchBoxItem from "../items/FeedMatchBoxItem";
import Reply from "./Reply";

import FeedMatchTest from "../items/FeedMatchTest";

export default class FeedCardDetails extends React.Component {

  render() {
    const { onPress, profileImg, user, address, bodyImg, bodyText, askMatchOnPress, matchDetailsOnPress, entryNavigationOnPress, hits } = this.props;
    return (
      <View>
        <View style={styles.profileWrap}>
          <TouchableOpacity
            style={styles.profileImgButton}
            onPress={onPress}
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

        <View>
          <FeedDateAddressSection
            icon="clock"
            topText="Dec 29, 2019, SUN"
            bottomText="PM 02:00 - PM 06:00"
          />
          <FeedDateAddressSection
            icon="map-pin"
            topText="양키스타디움"
            bottomText="1 E 161 St, The Bronx, NY 10451 USA"
          />
        </View>

        <View style={{ backgroundColor: colors.grey01 }}>

          <FeedMatchBoxItem
            askMatchOnPress={() => alert("매치팀 등록함")}
            matchDetailsOnPress={matchDetailsOnPress}
            matchClubImg={require('../../data/ImgTest/2bar.jpg')}
            title="Home"
            labelColor={colors.darkGrey}
            clubName="F.C. Barcelona"
            entry="20"
            entryBtnOnPress={() => alert("엔트리등록")}
            entryNavigationOnPress={entryNavigationOnPress}
            entryProfileImg={require('../../data/ImgTest/ffff.jpg')}
          />
          <FeedMatchBoxItem askMatchOnPress={() => alert("매치팀 등록함")} matchDetailsOnPress={matchDetailsOnPress} matchClubImg={require('../../data/ImgTest/1ars.jpg')} title="Away" clubName="Arsenal" entry="16" entryProfileImg={require('../../data/ImgTest/ffff.jpg')} entryBtnOnPress={() => alert("엔트리등록")} entryNavigationOnPress={entryNavigationOnPress} />

          <FeedMatchTest askMatchOnPress={() => alert("매치팀 등록함")} matchDetailsOnPress={matchDetailsOnPress} matchClubImg={profileImg} title="Away" entry="" entryBtnOnPress={() => alert("엔트리등록")} entryNavigationOnPress={entryNavigationOnPress} />

        </View>

        <View style={{ flex: 1, paddingTop: 10, paddingLeft: 15 }}>
          <Text style={{ fontSize: 12 }}><Text>{hits}</Text>  Hits</Text>
          <Text note style={{ color: 'grey', fontSize: 12 }}>PM 5 : 20, Jan 15, 2019</Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, paddingLeft: 15 }}>
          <TouchableOpacity
            onPress={() => alert("reply")}
          >
            <Feather name="message-circle" size={30} style={{ paddingRight: 15 }} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert("share")}
          >
            <Feather name="share-2" size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.replySection}>
          <Reply
            profileImg={profileImg}
            user={user}
            onPress={onPress}
          />
        </View>

      </View>
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
    backgroundColor: colors.white,
  },
});
