import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Content } from "native-base";
import colors from '../styles/colors';


import ClubHome from '../components/ClubHome';
import ClubSchedule from '../components/ClubSchedule';
import ClubPlayers from '../components/ClubPlayers';


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

  renderSection = () => {

    if (this.state.activeIndex == 0) {
      const { navigation } = this.props;
      return (
        <View>
          <ClubHome
            onPress={() => navigation.navigate('EditProfile')}
            feedOnPress={() => navigation.navigate('Profile')}
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
          <ClubSchedule />
        </View>
      )
    }
    else if (this.state.activeIndex == 2) {
      const { navigation } = this.props;
      return (
        <View>
          <ClubPlayers
            onPress={() => navigation.navigate('Profile')}
          />
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
  },
});
