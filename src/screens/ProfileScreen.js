import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Content, Button } from "native-base";
import colors from '../styles/colors';

class ProfileScreen extends React.Component {

  render() {

    const { navigation } = this.props;

    return (
      <Container style={styles.container}>
        <Content>

          <View style={styles.contantContainer}>

            <View style={styles.topWrap}>

              <View style={styles.imgWrap}>
                <Image
                  source={require('../data/ImgTest/cccc.jpg')}
                  style={styles.img}
                />
              </View>

              <View style={styles.textWrap}>
                <View style={styles.textWrapPadding}>
                  <View>
                    <Text style={styles.nameTag}>Username</Text>
                    <Text style={styles.property}>wwlee0405</Text>
                  </View>
                  <View>
                    <Text style={styles.nameTag}>Name</Text>
                    <Text style={styles.property}>Myoi Mina</Text>
                  </View>
                  <View>
                    <Text style={styles.nameTag}>Area</Text>
                    <Text style={styles.property}>Kobe, Japan</Text>
                  </View>
                  <View>
                    <Text style={styles.nameTag}>Position</Text>
                    <Text style={styles.property}>FW</Text>
                  </View>
                  <View>
                    <Text style={styles.nameTag}>Mainclub</Text>
                    <Text style={styles.property}>Real Madrid</Text>
                  </View>
                </View>
              </View>

            </View>

            <View style={styles.buttonWrap}>
              <Button
                bordered dark
                style={styles.editProfileButton}
                onPress={() => navigation.navigate('EditProfile')}
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
  },
  contantContainer: {
    paddingTop: 10,
  },
  topWrap: {
    flexDirection: 'row',
  },
  imgWrap: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  textWrap: {
    flex: 1,
  },
  textWrapPadding: {
    paddingTop: 10,
    paddingLeft: 20,
  },
  nameTag: {
    fontSize: 10,
    color: colors.darkGrey,
  },
  property: {
    fontSize: 15,
    color: colors.black,
  },
  buttonWrap: {
    paddingTop: 20,
  },
  editProfileButton: {
    flex: 1,
    marginRight: 25,
    marginLeft: 25,
    justifyContent: 'center',
    height: 40,
  }
});
