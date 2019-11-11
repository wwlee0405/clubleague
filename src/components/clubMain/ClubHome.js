import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

import FeedCard from '../FeedCard';

class ClubHome extends React.Component {

  render() {

    const {
      onPress,
      clubImg,
      clubProfileImg,
      clubName,
      members,
      leaderUser,
      address,
      feedOnPress
    } = this.props;

    return (
      <ScrollView>
        <View>
          <Image
            source={clubImg}
            style={styles.clubImg}
          />
          <View style={styles.clubProfileWrap}>
            <TouchableOpacity
              style={styles.clubProfileImgButton}
              onPress={onPress}
            >
              <Image
                source={clubProfileImg}
                style={styles.clubProfileImg}
              />
            </TouchableOpacity>
            <View style={styles.clubProfileTextWrap}>
              <View>
                <Text style={styles.clubNameText}>{clubName}</Text>
              </View>
              <View style={styles.clubProfileTeamInfoTextWrap}>
                <Text style={styles.clubProfileTopInfoTextLeft}>Members <Text>{members}</Text></Text>
                <Text style={styles.clubProfileTopInfoTextRight}>Leader <Text>{leaderUser}</Text></Text>
              </View>
              <View style={styles.clubProfileTeamInfoTextWrap}>
                <Text style={styles.clubProfileBottomInfoTextLeft}>{address}</Text>
                <Text style={{ fontSize: 14, paddingLeft: 20 }}>{address}</Text>
                <Text style={{ fontSize: 14, paddingLeft: 20 }}>{address}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ flex: 2, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ flex: 1, height: 50, backgroundColor: colors.yellowGreen }}
            onPress={() => alert("Application or just sign up.")}
          >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 18, color: colors.white }}>Join this Club</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, height: 50, backgroundColor: colors.blue }}
            onPress={() => alert("ask the match")}
          >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 18, color: colors.white }}>Ask the match</Text>
            </View>
          </TouchableOpacity>
        </View>


        <FeedCard onPress={feedOnPress} profileImg={require('../../data/ImgTest/eeee.png')} user="Sana" address="Osaka, Japan" bodyImg={require('../../data/ImgTest/aaaa.jpg')} bodyText="이번주 02/17 매칭 초청합니다. 팀명:클럽하우스 유니폼:흰색, 매너:최고, 장소:수지체육공원" hits="100"/>
        <FeedCard onPress={feedOnPress} profileImg={require('../../data/ImgTest/ffff.jpg')} user="Cristiano Ronaldo" address="Lisbon, Portugal" bodyImg={require('../../data/ImgTest/bbbb.jpg')} hits="200"/>
        <FeedCard onPress={feedOnPress} profileImg={require('../../data/ImgTest/cccc.jpg')} user="Mina" address="Hyogo, Japan" bodyImg={require('../../data/ImgTest/1ars.jpg')} hits="300"/>
        <FeedCard onPress={feedOnPress} profileImg={require('../../data/ImgTest/dddd.jpg')} user="Lionel Messi" address="Buenos Aires, Argentina" bodyImg={require('../../data/ImgTest/2bar.jpg')} hits="400"/>



      </ScrollView>
    );
  }
}

export default ClubHome;

const styles = StyleSheet.create({
  clubImg: {
    flex: 1,
    height: 120,
    width: null,
  },
  clubProfileWrap: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
  },
  clubProfileImgButton: {
    paddingRight: 15,
  },
  clubProfileImg: {
    width: 85,
    height: 85,
    borderRadius: 100,
  },
  clubProfileTextWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  clubNameText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  clubProfileTeamInfoTextWrap: {
    flexDirection: 'row',
  },
  clubProfileTopInfoTextLeft: {
    fontSize: 12,
    color: colors.darkGrey,
  },
  clubProfileTopInfoTextRight: {
    fontSize: 12,
    paddingLeft: 20,
    color: colors.darkGrey,
  },
  clubProfileBottomInfoTextLeft: {
    fontSize: 14,
  },
});
