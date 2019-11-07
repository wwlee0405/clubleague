import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Content, Item ,Input } from "native-base";
import colors from '../styles/colors';

import FeedCard from "../components/FeedCard";

import SearchInput from "../components/form/SearchInput";
import CreateMatchBox from "../components/form/CreateMatchBox";


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
      <Container>
        <Content>
          <View style={{ flex: 1, paddingTop: 250, paddingBottom: 300 }}>
            <SearchInput placeholderText="종목명, 도시명, 클럽명" />
            <SearchInput placeholderText="경기일자" />
          </View>

          <FeedCardComponent
            onPress={() => navigation.navigate("Profile")}
            profileImage="1"
            user="Sana"
            address="Osaka, Japan"
            imageSource="1"
            hits="100"
          />
          <FeedCard onPress={() => navigation.navigate("Profile")} profileImage="2" user="Cristiano Ronaldo" address="Lisbon, Portugal" imageSource="2" hits="200"/>
          <FeedCard onPress={() => navigation.navigate("Profile")} profileImage="3" user="Mina" address="Hyogo, Japan" imageSource="3" hits="300"/>
          <FeedCard onPress={() => navigation.navigate("Profile")} profileImage="4" user="Lionel Messi" address="Buenos Aires, Argentina" imageSource="4" hits="400"/>

        </Content>
      </Container>
    );
  }
}

export default FeedScreen;
