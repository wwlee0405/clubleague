import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView
} from "react-native";

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Content } from "native-base";
import FeedCardComponent from "../FeedCardComponent";

class FeedTab extends React.Component {

  static navigationOptions = {

    tabBarIcon: ({tintColor}) => (
      <MaterialCommunityIcons name="soccer-field" color={tintColor} size={24} />
    )
  }

  componentWillMount(){
    this.startHeaderHeight = 80
    if(Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <SafeAreaView style={{ flex:1 }}>
            <View style={{ flex:1 }}>
              <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                <View style={{
                  flexDrection: 'row', padding: 10,
                  backgroundColor: 'white', marginHorizontal: 30,
                  shadowOffset: { width: 0, height: 0 },
                  shadowColor: 'black',
                  shadowOpacity: 0.2,
                  elevation: 1,
                  marginTop: Platform.OS== 'android' ?30 : null
                }}>
                  <Feather name="search" size={20} style={{ marginRight: 10 }} />
                  <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Try New Delhi"
                    placeholderTextColor="black"
                    style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                  />
                </View>
              </View>

            </View>
          </SafeAreaView>


          <FeedCardComponent profileImage="1" user="Sana" address="Osaka, Japan" imageSource="1" hits="100"/>
          <FeedCardComponent profileImage="2" user="Yuna" address="Seoul, Korea" imageSource="2" hits="200"/>
          <FeedCardComponent profileImage="3" user="Mina" address="Hyogo, Japan" imageSource="3" hits="300"/>
          <FeedCardComponent profileImage="4" user="Seulgi" address="Seongnam, Korea" imageSource="4" hits="400"/>

        </Content>
      </Container>
    );
  }
}

export default FeedTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA"
  }
});
