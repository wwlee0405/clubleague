import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Content, Button } from "native-base";
import colors from '../styles/colors';
import TextInputField from "../components/form/TextInputField";

class EditProfileScreen extends React.Component {

  render() {
    return (
      <Container style={styles.container}>

        <Content>

          <View style={styles.imgWrap}>
            <Image
              source={require('../data/ImgTest/cccc.jpg')}
              style={styles.img}
            />
          </View>


          <View style={styles.textWrap}>
            <TextInputField labelText="Username" placeholder="Username" />
            <TextInputField labelText="Name" placeholder="Name" />
            <TextInputField labelText="Area" placeholder="Area" />
            <TextInputField labelText="Position" placeholder="Position" />
            <TextInputField labelText="Mainclub" placeholder="Mainclub" />

            <View style={{ paddingTop: 20 }}>
              <Button
                bordered dark
                style={{ flex: 1, marginRight: 25, marginLeft: 25, justifyContent: 'center', height: 40 }}
              >
                <Text>Submit</Text>
              </Button>
            </View>

          </View>


        </Content>
      </Container>
    );
  }
}

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imgWrap: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  img: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  textWrap: {
    padding: 20,
  }
});