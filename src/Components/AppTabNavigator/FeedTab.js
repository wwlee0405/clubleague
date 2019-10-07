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
                underlineColorAndroid="transparant"
                placeholder="Try New Delhi"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
              />
            </View>
          </View>

        </View>
      </SafeAreaView>
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
