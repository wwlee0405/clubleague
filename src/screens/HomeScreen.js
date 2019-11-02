import React from "react";
import { StyleSheet, Text, View, ScrollView , TouchableOpacity, Button } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Content, Thumbnail } from "native-base";
import colors from '../styles/colors';

import HomeScheduleComponent from "../components/HomeScheduleComponent";

class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MaterialCommunityIcons name="soccer" size={30} style={{ paddingLeft: 10 }} />,
      headerTitle: <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Clubleague</Text>,
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          title="profile"
        >
          <Feather name="user" size={30} style={{ paddingRight: 10 }} />
        </TouchableOpacity>
      ),
    };
  };

  render() {
    return (
      <Container style={styles.container}>

        <View style={styles.clubContainer}>
          <View style={styles.clubContainerTopWrap}>
            <Text style={styles.clubContainerRightText}>Club</Text>
            <View>
              <TouchableOpacity
                onPress={() => alert("New Club")}
                style={styles.clubContainerLeftButton}>
                <Feather name="plus-circle" style={styles.clubContainerLeftButtonIcon} />
                <Text style={styles.clubContainerLeftText}>New Club</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.clubContainerBottomWrap}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: 'center',
                paddingStart: 5,
                paddingEnd: 5
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Details')}
              >
                <Thumbnail
                  style={styles.largeThumbnail}
                  large source={require('../data/ImgTest/1ars.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Details')}
              >
                <Thumbnail
                  style={styles.largeThumbnail}
                  large source={require('../data/ImgTest/2bar.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Details')}
              >
                <Thumbnail
                  style={styles.largeThumbnail}
                  large source={require('../data/ImgTest/1ars.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Details')}
              >
                <Thumbnail
                  style={styles.largeThumbnail}
                  large source={require('../data/ImgTest/2bar.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Details')}
              >
                <Thumbnail
                  style={styles.largeThumbnail}
                  large source={require('../data/ImgTest/1ars.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Details')}
              >
                <Thumbnail
                  style={styles.largeThumbnail}
                  large source={require('../data/ImgTest/2bar.jpg')}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <Content>

          <HomeScheduleComponent />

        </Content>
      </Container>

    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  clubContainer: {
    height: 150,
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
  },
  clubContainerTopWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 7,
  },
  clubContainerRightText: {
    fontWeight: 'bold',
  },
  clubContainerLeftButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clubContainerLeftButtonIcon: {
    fontSize: 14,
  },
  clubContainerLeftText: {
    fontWeight: 'bold',
  },
  clubContainerBottomWrap: {
    flex: 3,
  },
  largeThumbnail: {
    marginHorizontal: 5,
    borderColor: colors.pink,
    borderWidth: 2,
  },
});
