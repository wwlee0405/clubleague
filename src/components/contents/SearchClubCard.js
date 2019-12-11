import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from '../../styles/colors';


export default class SearchClubCard extends React.Component {

  render() {
    const { onPress, clubProfileImg, clubName, sports, members, leaderUser, address } = this.props;
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
            <Text>{sports}</Text>
            <View style={styles.clubProfileTeamInfoTextWrap}>
              <Text style={styles.clubProfileTopInfoTextLeft}>Members  <Text style={styles.clubProfileTextData}>{members}</Text></Text>
              <Text style={styles.clubProfileTopInfoTextRight}>Leader  <Text style={styles.clubProfileTextData}>{leaderUser}</Text></Text>
            </View>
            <View style={styles.clubProfileTeamInfoTextWrap}>
              <Text style={styles.clubProfileBottomInfoTextLeft}>{address}</Text>
              <Text style={{ fontSize: 14, paddingLeft: 20 }}>{address}</Text>
              <Text style={{ fontSize: 14, paddingLeft: 20 }}>{address}</Text>
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
  clubProfileTextData: {
    color: colors.black,
  },
  clubProfileBottomInfoTextLeft: {
    fontSize: 14,
  },
});
