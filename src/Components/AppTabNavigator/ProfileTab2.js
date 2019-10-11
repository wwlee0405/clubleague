import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Content, Header, Left, Right, Body, Button } from "native-base";

import FeedCardComponent from "../FeedCardComponent";

var images = [
  require('../../../assets/ImgTest/aaaa.jpg'),
  require('../../../assets/ImgTest/bbbb.jpg'),
  require('../../../assets/ImgTest/cccc.jpg'),
  require('../../../assets/ImgTest/dddd.jpg'),
  require('../../../assets/ImgTest/eeee.png'),
  require('../../../assets/ImgTest/ffff.jpg'),
  require('../../../assets/ImgTest/gggg.jpg'),
  require('../../../assets/ImgTest/aaaa.jpg'),
  require('../../../assets/ImgTest/bbbb.jpg'),
  require('../../../assets/ImgTest/cccc.jpg'),
  require('../../../assets/ImgTest/dddd.jpg'),
  require('../../../assets/ImgTest/cccc.jpg')
]

var {width,height} = Dimensions.get('window')

class ProfileTab extends React.Component {

  static navigationOptions = {

    tabBarIcon: ({tintColor}) => (
      <Feather name="user" color={tintColor} size={24} />
    )
  }

  constructor(props){
    super(props)

    this.state = {
      activeIndex: 0
    }
  }

  segmentClicked = (index) => {
    this.setState({
      activeIndex: index
    })
  }

  renderSectionOne = () => {

    return images.map((image, index) => {
      return (
        <View key={index} style={[ {width:(width)/3}, {height:(width)/3}, {marginBottom: 2},
          index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }

        ]}>
          <Image
            style={{ flex: 1, width: undefined, height: undefined  }}
            source={image}
          />
        </View>
      )
    })
  }

  renderSection = () => {

    if (this.state.activeIndex == 0) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Text>this is the first section</Text>
          {this.renderSectionOne()}
        </View>
      )
    }
    else if (this.state.activeIndex == 1) {

      return (
        <View>
          <FeedCardComponent profileImage="1" user="Sana" address="Osaka, Japan" imageSource="1" hits="100"/>
          <FeedCardComponent profileImage="2" user="Yuna" address="Seoul, Korea" imageSource="2" hits="200"/>
          <FeedCardComponent profileImage="3" user="Mina" address="Hyogo, Japan" imageSource="3" hits="300"/>
        </View>
      )
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left><MaterialCommunityIcons name="soccer" size={30} style={{ paddingLeft: 10 }} /></Left>
          <Body><Text>Profile</Text></Body>
          <Right><Feather name="user" size={30} style={{ paddingRight: 10 }} /></Right>
        </Header>

        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  source={require('../../../assets/ImgTest/cccc.jpg')}
                  style={{ width: 75, height: 75, borderRadius: 37.5 }}
                />
              </View>
              <View style={{ flex: 3 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text>20</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>posts</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text>206</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>followers</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text>167</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>following</Text>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                  <Button bordered dark
                    style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }}
                  >
                    <Text>Edit Profile</Text>
                  </Button>
                  <Button bordered dark
                    style={{ flex: 1, marginRight: 10, marginLeft: 5, justifyContent: 'center', height: 30 }}
                  >
                    <Text>Set</Text>
                  </Button>
                </View>
              </View>
            </View>

            <View style={{ paddingBottom: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Mina</Text>
              <Text>Lark | Computer Jock | Commercial Pilot</Text>
              <Text>www.clubleague.com</Text>
            </View>
          </View>

          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
              <Button
                transparent
                onPress={() => this.segmentClicked(0)}
                active={this.state.activeIndex == 0}
              >
                <Feather name="user" size={15}
                    style={[this.state.activeIndex == 0 ? {} : { color: 'grey' }]}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentClicked(1)}
                active={this.state.activeIndex == 1}
              >
                <Feather name="user" size={15}
                    style={[this.state.activeIndex == 1 ? {} : { color: 'grey' }]}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentClicked(2)}
                active={this.state.activeIndex == 2}
              >
                <Feather name="user" size={15}
                    style={[this.state.activeIndex == 2 ? {} : { color: 'grey' }]}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentClicked(3)}
                active={this.state.activeIndex == 3}
              >
                <Feather name="user" size={15}
                    style={[this.state.activeIndex == 3 ? {} : { color: 'grey' }]}
                />
              </Button>
            </View>

            {this.renderSection}
          </View>
        </Content>

      </Container>
    );
  }
}

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
