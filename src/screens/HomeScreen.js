import React from "react";
import { StyleSheet, Text, View, ScrollView , TouchableOpacity, Button } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Content, Thumbnail } from "native-base";
import colors from '../styles/colors';

import FeedCard from '../components/FeedCard';

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

    const { navigation } = this.props;

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
                onPress={() => navigation.navigate('Details')}
              >
                <Thumbnail
                  style={styles.largeThumbnail}
                  large source={require('../data/ImgTest/1ars.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Details')}
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

        <FeedCard
          onPress={() => navigation.navigate("Profile")}
          profileImg={require('../data/ImgTest/dddd.jpg')}
          user="Lionel Messi"
          address="Buenos Aires, Argentina"
          bodyImg={require('../data/ImgTest/2bar.jpg')}
          bodyText="이번주 02/17 매칭 초청합니다. 팀명:클럽하우스 유니폼:흰색, 매너:최고, 장소:수지체육공원"
          hits="400"
        />
          <FeedCard onPress={() => navigation.navigate("Profile")} profileImg={require('../data/ImgTest/ffff.jpg')} user="Cristiano Ronaldo" address="Lisbon, Portugal" bodyImg={require('../data/ImgTest/bbbb.jpg')} hits="200"/>
          <FeedCard onPress={() => navigation.navigate("Profile")} profileImg={require('../data/ImgTest/cccc.jpg')} user="Mina" address="Hyogo, Japan" bodyImg={require('../data/ImgTest/1ars.jpg')} hits="300"/>


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
