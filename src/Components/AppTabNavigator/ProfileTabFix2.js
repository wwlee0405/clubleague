import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Content, Button } from "native-base";

import HeaderComponent from "./HeaderComponent";

class ProfileTab extends React.Component {

  render() {
    return (
      <Container style={styles.container}>

        <HeaderComponent />

        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  source={require('../../../assets/ImgTest/cccc.jpg')}
                  style={{ width: 150, height: 150, borderRadius: 100 }}
                />
              </View>

              <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20 }}>

                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 13, color: 'grey' }}>Username</Text>
                  <Text style={{ fontSize: 13, color: 'grey' }}>Name</Text>
                  <Text style={{ fontSize: 13, color: 'grey' }}>Area</Text>
                  <Text style={{ fontSize: 13, color: 'grey' }}>Position</Text>
                  <Text style={{ fontSize: 13, color: 'grey' }}>Mainclub</Text>
                </View>

                <View style={{ flex: 1, paddingRight: 20 }}>
                  <Text style={{ fontSize: 13, color: 'black' }}>wwlee0405</Text>
                  <Text style={{ fontSize: 13, color: 'black' }}>Myoi Mina</Text>
                  <Text style={{ fontSize: 13, color: 'black' }}>Kobe, Japan</Text>
                  <Text style={{ fontSize: 13, color: 'black' }}>FW</Text>
                  <Text style={{ fontSize: 13, color: 'black' }}>FC Barcya</Text>

                </View>
              </View>

            </View>

            <View style={{ paddingTop: 20 }}>
              <Button
                bordered dark
                style={{ flex: 1, marginRight: 25, marginLeft: 25, justifyContent: 'center', height: 40 }}
              >
                <Text>Edit Profile</Text>
              </Button>
            </View>


            <View style={{ paddingTop: 20, paddingBottom: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Mina</Text>
              <Text>Lark | Computer Jock | Commercial Pilot</Text>
              <Text>www.clubleague.com</Text>
            </View>
          </View>


        </Content>

      </Container>
    );
  }
}

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
