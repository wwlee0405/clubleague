import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Container, Content } from "native-base";
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';

import FeedCard from './FeedCard';

class ClubHome extends React.Component {

  render() {

    const { onPress, feedOnPress } = this.props;

    const profileImages = {
      "1": require('../data/ImgTest/1ars.jpg'),
      "2": require('../data/ImgTest/2bar.jpg'),
      "3": require('../data/ImgTest/cccc.jpg'),
      "4": require('../data/ImgTest/dddd.jpg')
    }

    const images = {
      "1": require('../data/ImgTest/aaaa.jpg'),
      "2": require('../data/ImgTest/bbbb.jpg'),
      "3": require('../data/ImgTest/1ars.jpg'),
      "4": require('../data/ImgTest/2bar.jpg')
    }

    return (
      <Content>
        <View>
          <Image
            source={images[this.props.imageSource]}
            style={styles.clubImg}
          />
          <View style={styles.clubProfileWrap}>
            <TouchableOpacity
              style={styles.clubProfileImgButton}
              onPress={onPress}
            >
              <Image
                source={profileImages[this.props.profileImage]}
                style={styles.clubProfileImg}
              />
            </TouchableOpacity>
            <View style={styles.clubProfileTextWrap}>
              <View>
                <Text style={styles.clubNameText}>{this.props.clubName}</Text>
              </View>
              <View style={styles.clubProfileTeamInfoTextWrap}>
                <Text style={styles.clubProfileTopInfoTextLeft}>Members <Text>{this.props.members}</Text></Text>
                <Text style={styles.clubProfileTopInfoTextRight}>Leader <Text>{this.props.leaderUser}</Text></Text>
              </View>
              <View style={styles.clubProfileTeamInfoTextWrap}>
                <Text style={styles.clubProfileBottomInfoTextLeft}>{this.props.address}</Text>
                <Text style={{ fontSize: 14, paddingLeft: 20 }}>{this.props.address}</Text>
                <Text style={{ fontSize: 14, paddingLeft: 20 }}>{this.props.address}</Text>
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


        <FeedCard onPress={feedOnPress} profileImage="1" user="Sana" address="Osaka, Japan" imageSource="1" hits="100"/>
        <FeedCard profileImage="2" user="Cristiano Ronaldo" address="Lisbon, Portugal" imageSource="2" hits="200"/>
        <FeedCard profileImage="3" user="Mina" address="Hyogo, Japan" imageSource="3" hits="300"/>
        <FeedCard profileImage="4" user="Lionel Messi" address="Buenos Aires, Argentina" imageSource="4" hits="400"/>



      </Content>
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
