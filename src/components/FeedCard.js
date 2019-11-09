import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Card } from "native-base";
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';

import CreateMatchBox from './form/CreateMatchBox';

import FeedMatchBoxItem from './items/FeedMatchBoxItem';

class FeedCard extends React.Component {

  render() {

    const { onPress, profileImg, user, address, bodyImg, bodyText, hits } = this.props;

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

        <View style={styles.matchBoxItemSection}>

          <FeedMatchBoxItem title="Home" onPress={() => alert("apply for match")} borderLine={colors.darkGrey} labelColor={colors.darkGrey} entry="20" />
          <FeedMatchBoxItem title="Away" onPress={() => alert("apply for match")} entry="12"/>
          <FeedMatchBoxItem title="Away" onPress={() => alert("apply for match")} entry="24"/>

        </View>


        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingLeft: 15, peddingRight: 15 }}>
          <View style={{ width: null, height: 25, borderRadius: 100 , backgroundColor: colors.green01 }}>
            <Text style={{ paddingLeft: 10, paddingRight: 10, color: colors.white }}>Soccer</Text>
          </View>
          <View style={{ width: null, height: 25, borderRadius: 100 , backgroundColor: colors.blue, marginLeft: 10 }}>
            <Text style={{ paddingLeft: 10, paddingRight: 10, color: colors.white }}>Osaka</Text>
          </View>
          <View style={{ width: null, height: 25, borderRadius: 20 , backgroundColor: colors.darkOrange, marginLeft: 10 }}>
            <Text style={{ paddingLeft: 10, paddingRight: 10, color: colors.white }}>Oct 20, 2019</Text>
          </View>
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

      </View>
    );
  }
}

export default FeedCard;

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
  matchBoxItemSection: {
    flex: 1,
    alignItems: 'center',
  },
});
