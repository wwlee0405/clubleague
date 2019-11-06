import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Card } from "native-base";
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';

import CreateMatchBox from "../components/form/CreateMatchBox";

class FeedCardComponent extends React.Component {

  render() {

    const { onPress } = this.props;

    const profileImages = {
      "1": require('../data/ImgTest/eeee.png'),
      "2": require('../data/ImgTest/ffff.jpg'),
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
      <View>
        <View style={styles.profileWrap}>
          <TouchableOpacity
            style={styles.profileImgButton}
            onPress={onPress}
          >
            <Image
              source={profileImages[this.props.profileImage]}
              style={styles.profileImg}
            />
          </TouchableOpacity>
          <View style={styles.profileTextWrap}>
            <Text style={styles.profileUserText}>{this.props.user}</Text>
            <Text>{this.props.address}</Text>
          </View>
        </View>

        <View>
          <Image
            style={styles.bodyImg}
            source={images[this.props.imageSource]}
          />
          <View style={styles.bodyText}>
            <Text>
              이번주 02/17 매칭 초청합니다.
              팀명:클럽하우스
              유니폼:흰색
              매너:최고
              장소:수지체육공원
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>

          <View style={{ flex: 1, flexDirection: 'row' }}>

            <CreateMatchBox homeAway="Home" borderLine={colors.darkGrey} labelColor={colors.darkGrey} />

            <View style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: 10 }}>
              <Text><Text>10</Text> Entry</Text>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>

            <CreateMatchBox homeAway="Away" />

            <View style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: 10 }}>
              <Text><Text>20</Text> Entry</Text>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>

            <CreateMatchBox homeAway="Away" />

            <View style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: 10 }}>
              <Text><Text>22</Text> Entry</Text>
            </View>
          </View>

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
          <Text style={{ fontSize: 12 }}><Text>{this.props.hits}</Text>  Hits</Text>
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

export default FeedCardComponent;

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
  }
});
