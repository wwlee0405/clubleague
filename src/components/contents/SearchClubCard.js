import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from '../../styles/colors';


export default class SearchClubCard extends React.Component {

  render() {
    const { onPress, clubProfileImg, clubName, clubInfo, sports, members, leaderUser, address } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.clubProfileWrap}>

          <View style={styles.clubProfileImgWrap}>
            <Image
              source={clubProfileImg}
              style={styles.clubProfileImg}
            />
          </View>

          <View style={styles.clubProfileTextWrap}>
            <View>
              <Text style={styles.clubNameText}>{clubName}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 12 }}>{clubInfo}</Text>
            </View>
            <View style={styles.clubProfileTeamInfoTextWrap}>
              <Text style={styles.clubProfileTopInfoTextLeft}>{sports}</Text>
              <Text style={styles.clubProfileTopInfoTextRight}>{address}</Text>
            </View>
            <View style={styles.clubProfileTeamInfoTextWrap}>
              <Text style={styles.clubProfileBottomInfoTextLeft}>Members  <Text>{members}</Text></Text>
              <Text style={styles.clubProfileBottomInfoTextRight}>Leader  <Text>{leaderUser}</Text></Text>
            </View>
          </View>

        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
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
  clubProfileImgWrap: {
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 18,
  },
  clubProfileTeamInfoTextWrap: {
    flexDirection: 'row',
  },
  clubProfileTopInfoTextLeft: {
    fontSize: 12,
    color: colors.grey03,
  },
  clubProfileTopInfoTextRight: {
    paddingLeft: 20,
    fontSize: 12,
    color: colors.grey03,
  },
  clubProfileBottomInfoTextLeft: {
    fontSize: 12,
    color: colors.grey03,
  },
  clubProfileBottomInfoTextRight: {
    fontSize: 12,
    paddingLeft: 20,
    color: colors.grey03,
  },
});
