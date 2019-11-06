import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Content } from "native-base";
import colors from '../styles/colors';

import ClubHomeComponent from "../components/ClubHomeComponent";
import ClubPlayersComponent from "../components/ClubPlayersComponent";
import ClubSettingComponent from "../components/ClubSettingComponent";

/*backup*/

var images = [
  require('../data/ImgTest/aaaa.jpg'),
  require('../data/ImgTest/bbbb.jpg'),
  require('../data/ImgTest/cccc.jpg'),
  require('../data/ImgTest/dddd.jpg'),
  require('../data/ImgTest/eeee.png'),
  require('../data/ImgTest/ffff.jpg'),
  require('../data/ImgTest/gggg.jpg'),
  require('../data/ImgTest/aaaa.jpg'),
  require('../data/ImgTest/bbbb.jpg'),
  require('../data/ImgTest/cccc.jpg'),
  require('../data/ImgTest/dddd.jpg'),
  require('../data/ImgTest/eeee.png'),
  require('../data/ImgTest/ffff.jpg'),
  require('../data/ImgTest/gggg.jpg'),
  require('../data/ImgTest/aaaa.jpg'),
  require('../data/ImgTest/bbbb.jpg'),
  require('../data/ImgTest/cccc.jpg'),
  require('../data/ImgTest/eeee.png'),
]

var {width,height} = Dimensions.get('window')

class DetailsScreen extends React.Component {

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
        <View key={index} style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 },
          index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 2 }
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
        <View>
          <ClubHomeComponent
            imageSource="1"
            profileImage="2"
            clubName="F.C. Barcelona"
            members="15"
            leaderUser="Ernesto Valverde"
            address="Barcelona"
          />
        </View>
      )
    }
    else if (this.state.activeIndex == 1) {

      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionOne()}
        </View>
      )
    }
    else if (this.state.activeIndex == 2) {

      return (
        <View>
          <ClubPlayersComponent />
        </View>
      )
    }
    else if (this.state.activeIndex == 3) {

      return (
        <View>

          <View>
            <TouchableOpacity
              style={{ flex: 1, height: 50, justifyContent: 'center' }}
              onPress={() => this.props.navigation.navigate('Setting')}
            >
              <Text style={{ fontSize: 15, paddingLeft: 20 }}>Club 기본 정보 관리</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={{ flex: 1, height: 50, justifyContent: 'center' }}
              onPress={() => this.props.navigation.navigate('SettingMember')}
            >
              <Text style={{ fontSize: 15, paddingLeft: 20 }}>Member 활동 관리</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={{ flex: 1, height: 50, justifyContent: 'center' }}
              onPress={() => this.props.navigation.navigate('SettingManagement')}
            >
              <Text style={{ fontSize: 15, paddingLeft: 20 }}>Management 설정</Text>
            </TouchableOpacity>
          </View>

        </View>
      )
    }
  }

  render() {
    return (
      <Container style={styles.container}>

        <View style={styles.clubTab}>
          <TouchableOpacity
            onPress={() => this.segmentClicked(0)}
            active={this.state.activeIndex == 0}
            style={styles.clubTabButton}
          >
            <Text
              name="home"
              size={15}
              style={[this.state.activeIndex == 0 ? {} : { color: colors.lightGrey }]}
            >
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.segmentClicked(1)}
            active={this.state.activeIndex == 1}
            style={styles.clubTabButton}
          >
            <Text
              name="schedule"
              size={15}
              style={[this.state.activeIndex == 1 ? {} : { color: colors.lightGrey }]}
            >
              Schedule
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.segmentClicked(2)}
            active={this.state.activeIndex == 2}
            style={styles.clubTabButton}
          >
            <Text
              name="players"
              size={15}
              style={[this.state.activeIndex == 2 ? {} : { color: colors.lightGrey }]}
            >
              Players
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            transparent
            onPress={() => this.segmentClicked(3)}
            active={this.state.activeIndex == 3}
            style={styles.clubTabButton}
          >
            <Text
              name="setting"
              size={15}
              style={[this.state.activeIndex == 3 ? {} : { color: colors.lightGrey }]}
            >
              Setting
            </Text>
          </TouchableOpacity>
        </View>

        <Content>

          <View>

            {this.renderSection()}






          </View>
        </Content>

      </Container>
    );
  }
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  clubTab: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: colors.white01,
  },
  clubTabButton: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
