import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../styles/colors';

import NoticeListItem from '../components/items/NoticeListItem';



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

  render() {

    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          <NoticeListItem
            onPress={() => navigation.navigate('Feed')}
            noticeOnPress={() => navigation.navigate('Profile')}
            profileImg={require('../data/ImgTest/cccc.jpg')}
            user="Mina"
            text="게임 요청을 합니다 . ."
            time="PM 3:43"
          />
          
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
