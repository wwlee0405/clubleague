import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../styles/colors';

import SearchInput from "../components/form/SearchInput";
import FeedCard from "../components/FeedCard";

class FeedScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MaterialCommunityIcons name="soccer" size={30} style={{ paddingLeft: 10 }} />,
      headerTitle: <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Clubleague</Text>,
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Writing')}
          title="writing"
        >
          <Feather name="edit" size={30} style={{ paddingRight: 10 }} />
        </TouchableOpacity>
      ),
    };
  };

  render() {

    const { navigation } = this.props;

    return (
      <View>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flex: 1, paddingTop: 250, paddingBottom: 300 }}>
            <SearchInput placeholderText="종목명, 도시명, 클럽명" />
            <SearchInput placeholderText="경기일자" />
          </View>

          <FeedCard
            onPress={() => navigation.navigate('Profile')}
            profileImg={require('../data/ImgTest/eeee.png')}
            user="Sana"
            address="Osaka, Japan"
            bodyImg={require('../data/ImgTest/aaaa.jpg')}
            bodyText="이번주 02/17 매칭 초청합니다. 팀명:클럽하우스 유니폼:흰색, 매너:최고, 장소:수지체육공원"
            hits="100"
          />
          <FeedCard onPress={() => navigation.navigate('Profile')} profileImg={require('../data/ImgTest/ffff.jpg')} user="Cristiano Ronaldo" address="Lisbon, Portugal" bodyImg={require('../data/ImgTest/bbbb.jpg')} hits="200"/>
          <FeedCard onPress={() => navigation.navigate('Profile')} profileImg={require('../data/ImgTest/cccc.jpg')} user="Mina" address="Hyogo, Japan" bodyImg={require('../data/ImgTest/1ars.jpg')} hits="300"/>
          <FeedCard onPress={() => navigation.navigate('Profile')} profileImg={require('../data/ImgTest/dddd.jpg')} user="Lionel Messi" address="Buenos Aires, Argentina" bodyImg={require('../data/ImgTest/2bar.jpg')} hits="400"/>


        </ScrollView>
      </View>
    );
  }
}

export default FeedScreen;
