import React from "react";
import { StyleSheet, Text, View, ScrollView ,Button } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Content, Thumbnail } from "native-base";
import colors from '../styles/colors';
import FeedCardComponent from "../components/FeedCardComponent";

class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MaterialCommunityIcons name="soccer" size={30} style={{ paddingLeft: 10 }} />,
      headerTitle: <Text>Clubleague</Text>,
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color="#fff"
        />
      ),
    };
  };

  render() {
    return (
      <Container style={styles.container}>

        <Content>

          <View style={{ height: 140 }}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 7
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>Club</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Feather name="plus-circle" style={{ fontSize: 14 }} />
                <Text style={{ fontWeight: 'bold' }}>New Club</Text>
              </View>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5
                }}
              >
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: colors.pink, borderWidth: 2 }}
                  large source={require('../../assets/ImgTest/1ars.jpg')}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: colors.pink, borderWidth: 2 }}
                  large source={require('../../assets/ImgTest/2bar.jpg')}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: colors.pink, borderWidth: 2 }}
                  large source={require('../../assets/ImgTest/1ars.jpg')}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: colors.pink, borderWidth: 2 }}
                  large source={require('../../assets/ImgTest/2bar.jpg')}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: colors.pink, borderWidth: 2 }}
                  large source={require('../../assets/ImgTest/1ars.jpg')}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: colors.pink, borderWidth: 2 }}
                  large source={require('../../assets/ImgTest/2bar.jpg')}
                />
              </ScrollView>
            </View>
          </View>

          <FeedCardComponent profileImage="1" user="Sana" address="Osaka, Japan" imageSource="1" hits="100"/>
          <FeedCardComponent profileImage="2" user="Cristiano Ronaldo" address="Lisbon, Portugal" imageSource="2" hits="200"/>
          <FeedCardComponent profileImage="3" user="Mina" address="Hyogo, Japan" imageSource="3" hits="300"/>
          <FeedCardComponent profileImage="4" user="Lionel Messi" address="Buenos Aires, Argentina" imageSource="4" hits="400"/>

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
  }
});
