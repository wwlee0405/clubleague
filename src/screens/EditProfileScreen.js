import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Container, Content } from "native-base";
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';
import TextInputField from "../components/form/TextInputField";

class EditProfileScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          title="submit"
        >
          <Feather name="check" size={30} style={{ paddingRight: 10 }} />
        </TouchableOpacity>
      ),
    };
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>

          <View style={styles.imgWrap}>
            <TouchableOpacity
              onPress={() => alert("edit img")}
            >
              <Image
                source={require('../data/ImgTest/cccc.jpg')}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.textWrap}>
            <TextInputField labelText="Username" placeholder="Username" />
            <TextInputField labelText="Name" placeholder="Name" />
            <TextInputField labelText="Area" placeholder="Area" />
            <TextInputField labelText="Position" placeholder="Position" />
            <TextInputField labelText="Mainclub" placeholder="Mainclub" />
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
