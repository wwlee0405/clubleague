import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../styles/colors';

import SearchInput from "../components/form/SearchInput";
import FeedCard from "../components/contents/FeedCard";
import feedcard from "../data/feedcard";

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


  renderFeedCard() {
    const { onPress, navigation } = this.props;
    return feedcard.map((feedcard, index) => {
      return (
        <View
          key={`feedcard-${index}`}
        >
          <FeedCard
            key={`feedcard-item-${index}`}
            profileImg={feedcard.profileImg}
            user={feedcard.user}
            address={feedcard.address}
            bodyImg={feedcard.bodyImg}
            bodyText={feedcard.bodyText}
            hits={feedcard.hits}
            onPress={() => navigation.navigate('FeedCard')}
            profileOnPress={() => navigation.navigate('Profile')}
          />
        </View>
      );
    });
  }

  render() {
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

          {this.renderFeedCard()}

        </ScrollView>
      </View>
    );
  }
}

export default FeedScreen;
