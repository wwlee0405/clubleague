import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Header, Left, Right, Body, Button } from "native-base";

class HeaderComponent extends React.Component {

  render() {
    return (
      <Header transparent style={{ backgroundColor: 'white', borderBottom: 1, borderBottomColor: 'grey' }}>
        <Left><MaterialCommunityIcons name="soccer" size={30} style={{ paddingLeft: 10 }} /></Left>
        <Body><Text style={{ fontWeight: 'bold', fontSize: 18 }}>Club League</Text></Body>
        <Right>
          <Button transparent title="profile" onPress={() => this.props.navigation.navigate('ProfileTab')}>
            <Feather name="user" size={30} style={{ paddingRight: 10 }} />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default HeaderComponent;
