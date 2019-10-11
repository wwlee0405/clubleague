import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Content, Button, Header, Left, Right, Body } from "native-base";


class EditProfileTab extends React.Component {

  render() {
    return (
      <Container style={styles.container}>

        <Header transparent style={{ backgroundColor: 'white', borderBottom: 1, borderBottomColor: 'grey' }}>
          <Left><MaterialCommunityIcons name="soccer" size={30} style={{ paddingLeft: 10 }} /></Left>
          <Body><Text style={{ fontWeight: 'bold', fontSize: 18 }}>Edit Profile</Text></Body>
          <Right>
            <Button transparent title="profile" onPress={() => this.props.navigation.navigate('ProfileTab')}>
              <Text style={{ fontWeight: 'bold' }}>완료</Text>
            </Button>
          </Right>
        </Header>

        <Content>

          <View style={{ flex: 1, alignItems: 'center', paddingTop: 30 }}>
            <Image
              source={require('../../../assets/ImgTest/cccc.jpg')}
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
          </View>
      

          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center', paddingTop: 30 }}>
                <Image
                  source={require('../../../assets/ImgTest/cccc.jpg')}
                  style={{ width: 150, height: 150, borderRadius: 100 }}
                />
              </View>


              <View style={{ flex: 1 }}>
                <View style={{ paddingTop: 10, paddingLeft: 20 }}>
                  <View>
                    <Text style={{ fontSize: 10, color: 'grey' }}>Username</Text>
                    <Text style={{ fontSize: 15, color: 'black' }}>wwlee0405</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10, color: 'grey' }}>Name</Text>
                    <Text style={{ fontSize: 15, color: 'black' }}>Myoi Mina</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10, color: 'grey' }}>Area</Text>
                    <Text style={{ fontSize: 15, color: 'black' }}>Kobe, Japan</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10, color: 'grey' }}>Position</Text>
                    <Text style={{ fontSize: 15, color: 'black' }}>FW</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10, color: 'grey' }}>Mainclub</Text>
                    <Text style={{ fontSize: 15, color: 'black' }}>Real Madrid</Text>
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


          </View>


        </Content>
      </Container>
    );
  }
}

export default EditProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
