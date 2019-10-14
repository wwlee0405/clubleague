import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Content, Button } from "native-base";

import HeaderComponent from "../components/HeaderComponent";

class ProfileScreen extends React.Component {

  render() {
    return (
      <Container style={styles.container}>

        <HeaderComponent />

        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  source={require('../../assets/ImgTest/cccc.jpg')}
                  style={{ width: 150, height: 150, borderRadius: 100 }}
                />
              </View>

              <View style={{ flex: 1 }}>
                <View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 25  }}>
                    <Text style={{ fontSize: 12, color: 'grey' }}>Username</Text>
                    <Text>wwlee0405</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 25 }}>
                    <Text style={{ fontSize: 12, color: 'grey' }}>Name</Text>
                    <Text>Myoi Mina</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingRight: 25 }}>
                    <Text style={{ fontSize: 12, color: 'grey' }}>Area</Text>
                    <Text>Kobe</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 25 }}>
                    <Text style={{ fontSize: 12, color: 'grey' }}>Position</Text>
                    <Text>FW</Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>167</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>following</Text>
                  </View>
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

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
