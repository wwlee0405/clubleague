import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Content, Button } from "native-base";
import colors from '../styles/colors';

class ProfileScreen extends React.Component {

  render() {
    return (
      <Container style={styles.container}>

        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center', paddingTop: 30 }}>
                <Image
                  source={require('../data/ImgTest/cccc.jpg')}
                  style={{ width: 150, height: 150, borderRadius: 100 }}
                />
              </View>


              <View style={{ flex: 1 }}>
                <View style={{ paddingTop: 10, paddingLeft: 20 }}>
                  <View>
                    <Text style={{ fontSize: 10, color: colors.darkGrey }}>Username</Text>
                    <Text style={{ fontSize: 15, color: colors.black }}>wwlee0405</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10, color: colors.darkGrey }}>Name</Text>
                    <Text style={{ fontSize: 15, color: colors.black }}>Myoi Mina</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10, color: colors.darkGrey }}>Area</Text>
                    <Text style={{ fontSize: 15, color: colors.black }}>Kobe, Japan</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10, color: colors.darkGrey }}>Position</Text>
                    <Text style={{ fontSize: 15, color: colors.black }}>FW</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10, color: colors.darkGrey }}>Mainclub</Text>
                    <Text style={{ fontSize: 15, color: colors.black }}>Real Madrid</Text>
                  </View>
                </View>
              </View>

            </View>


            <View style={{ paddingTop: 20 }}>
              <Button
                bordered dark
                style={{ flex: 1, marginRight: 25, marginLeft: 25, justifyContent: 'center', height: 40 }}
                onPress={() => this.props.navigation.navigate('EditProfile')}
              >
                <Text>Edit Profile</Text>
              </Button>
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
