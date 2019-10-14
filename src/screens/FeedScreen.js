import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Content, Item ,Input, Button } from "native-base";
import colors from '../styles/colors';
import FeedCardComponent from "../components/FeedCardComponent";

class FeedScreen extends React.Component {

  static navigationOptions = {

    tabBarIcon: ({tintColor}) => (
      <MaterialCommunityIcons name="soccer-field" color={tintColor} size={24} />
    )
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={{ paddingTop: 10, paddingBottom: 10 }}>
            <View style={{ flex: 1, paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
              <Item searchBar rounded style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Feather name="search" size={20} style={{ marginRight: 10 }} />
                <Input placeholder="도시명, 클럽명, 경기일자" />
                <Button transparent>
                  <Text>Search</Text>
                </Button>
              </Item>
            </View>
          </View>


          <FeedCardComponent profileImage="1" user="Sana" address="Osaka, Japan" imageSource="1" hits="100"/>
          <FeedCardComponent profileImage="2" user="Cristiano Ronaldo" address="Lisbon, Portugal" imageSource="2" hits="200"/>
          <FeedCardComponent profileImage="3" user="Mina" address="Hyogo, Japan" imageSource="3" hits="300"/>
          <FeedCardComponent profileImage="4" user="Lionel Messi" address="Buenos Aires, Argentina" imageSource="4" hits="400"/>

        </Content>
      </Container>
    );
  }
}

export default FeedScreen;
