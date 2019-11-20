import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import colors from '../../styles/colors';

export default class SetSportBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pickerSelection: 'Select a Sport',
      pickerDisplayed: false
    }
  }

  setPickerValue(newValue) {
    this.setState ({
      pickerSelection: newValue
    });

    this.togglePicker();
  }

  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
  }

  render() {
    const { borderLine, labelColor } = this.props;
    const borderColor = borderLine || colors.green01;
    const color = labelColor || colors.green01;

    const pickerValues = [
      {
        title: 'Soccer',
        value: 'Soccer'
      },
      {
        title: 'Basketball',
        value: 'Basketball'
      },
      {
        title: 'Baseball',
        value: 'Baseball'
      },
    ]

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[{ borderColor }, styles.box]}
          onPress={() => this.togglePicker()}
          title={"select"}
        >
          <Text style={[{ color }, styles.labelText]}>Sport</Text>
          <Text style={styles.sportText}>{ this.state.pickerSelection }</Text>

          <Modal
            animationType= "slide"
            visible={this.state.pickerDisplayed}
            transparent={true}
            onRequestClose={() => console.log('close was requsted')}
          >
            <View style={styles.pickerWrap}>
              <Text style={styles.pickerTopText}>Please select a sport.</Text>

              { pickerValues.map((value, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.pickerBodyBtn}
                    onPress={() => this.setPickerValue(value.value)}
                  >
                    <Text style={styles.pickerBodyText}>{value.title}</Text>
                  </TouchableOpacity>
                )
              })}

              <TouchableOpacity
                style={styles.pickerBodyBtn}
                onPress={() => this.togglePicker()}
              >
                <Text style={styles.pickerBodyCancelText}>Cancel</Text>
              </TouchableOpacity>

            </View>
          </Modal>

        </TouchableOpacity>
      </View>
    );
  }
}

SetSportBox.propTypes = {
  borderLine: PropTypes.string,
  labelColor: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    paddingTop: 10,
  },
  box: {
    flex: 6,
    flexDirection: 'row',
    width: 250,
    height: 45,
    borderRadius: 100,
    alignItems: 'center',
    borderWidth: 1,
  },
  labelText: {
    flex: 1,
    paddingLeft: 15,
    fontSize: 10,
  },
  sportText: {
    flex: 5,
    paddingLeft: 5,
  },
  pickerWrap: {
    margin: 20,
    padding: 20,
    backgroundColor: colors.white01,
    bottom: 60,
    left: 20,
    right: 20,
    alignItems: 'center',
    position: 'absolute',
  },
  pickerTopText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  pickerBodyBtn: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  pickerBodyText: {
    fontSize: 16,
  },
  pickerBodyCancelText: {
    fontSize: 16,
    color: colors.darkGrey,
  },
});
