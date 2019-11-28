import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../styles/colors';


import NoticeCard from "../components/contents/NoticeCard";
import noticecard from "../data/noticecard";

import Testimda from '../components/backupTest/Testimda';


class NoticeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MaterialCommunityIcons name="soccer" size={30} style={{ paddingLeft: 10 }} />,
      headerTitle: <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Clubleague</Text>,
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          title="profile"
        >
          <Feather name="user" size={30} style={{ paddingRight: 10 }} />
        </TouchableOpacity>
      ),
    };
  };

  renderNoticeCard() {
    const { onPress, noticeOnPress, navigation } = this.props;
    return noticecard.map((noticecard, index) => {
      return (
        <View key={`noticecard-${index}`}>
          <NoticeCard
            key={`noticecard-item-${index}`}
            onPress={() => navigation.navigate('FeedCard')}
            noticeOnPress={() => navigation.navigate('Profile')}
            profileImg={noticecard.profileImg}
            user={noticecard.user}
            text={noticecard.text}
            time={noticecard.time}
          />
        </View>
      );
    });
  }

  render() {

    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          <Testimda />
          {this.renderNoticeCard()}

        </ScrollView>
      </View>
    );
  }
}

export default NoticeScreen;

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
});
