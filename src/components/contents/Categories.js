import React from "react";
import { StyleSheet, View, Text, ScrollView , TouchableOpacity, Image } from "react-native";
import colors from '../../styles/colors';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);

  }

  get Categories() {
    const { categories, onPress } = this.props;
    return categories.map((category, index) => {
      return(
        <TouchableOpacity
          onPress={onPress}
          key={index}
        >
          <View style={styles.categoriesWrap}>
            <Image
              style={styles.thumbnail}
              source={category.photo}
            />
            <Text style={styles.clubName}>{category.clubName}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollWrap}
      >
        {this.Categories}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  categoriesWrap: {
    alignItems: 'center',
  },
  thumbnail: {
    marginHorizontal: 5,
    borderColor: colors.pink,
    borderWidth: 2,
    width: 85,
    height: 85,
    borderRadius: 100,
  },
  clubName: {
    fontWeight: 'bold',
  },
  scrollWrap: {
    alignItems: 'center',
    paddingStart: 5,
    paddingEnd: 5,
  },
});
