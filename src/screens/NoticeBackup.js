import React, { Component } from 'react';
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import { List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { Feather } from '@expo/vector-icons';

/*import HeaderComponent from "../components/HeaderComponent";*/
/*import FlatListComponent from "../components/FlatListComponent";*/

class NoticeScreen extends React.Component {

  static navigationOptions = {

    tabBarIcon: ({tintColor}) => (
      <Feather name="user" color={tintColor} size={24} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Dan'},
              {key: 'Dominic'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={({item}) =>

              <View>

                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={require('../data/ImgTest/2bar.jpg')} />
                    </Left>
                    <Body>
                      <Text>{item.key}</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                </List>

              </View>

            }
          />
        </ScrollView>
      </View>
    );
  }
}

export default NoticeScreen;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 5,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
