/* eslint-disable react/prop-types */
/* eslint-disable import/first */
/* eslint-disable react-native/no-unused-styles */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { Component } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import IMAGES from '../../configs/images';
import PropTypes from 'prop-types';
import { Container, Header, Content, Item, Input } from 'native-base';

_SignIn = async () => {
  this.props.navigation.navigate('Home');
};

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View>
            <Image source={IMAGES.logo} resizeMode="contain" style={styles.logo} />
          </View>
          <Item rounded style={{ height: 50, width: 260, borderRadius: 5, marginBottom: 10 }}>
            <Input placeholder="" />
          </Item>
          <Item rounded style={{ height: 50, width: 260, borderRadius: 5, marginBottom: 10 }}>
            <Input placeholder="" />
          </Item>
        </View>
        <TouchableOpacity style={styles.lupas}>
          <Text style={styles.lupastext}>Lupa kata sandi</Text>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 60, marginTop: 15 }}>
          <Text style={{ color: '#989898' }}>belum punya akun? </Text>
          <TouchableOpacity>
            <Text style={{ color: '#30B27C' }}>daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },

  logo: {
    width: 200,
    marginBottom: 5
  },

  inputBox: {
    width: 250,

    backgroundColor: '#FFFFFF',

    paddingHorizontal: 16,

    fontSize: 16,

    borderWidth: 1,

    color: '#000000',

    marginVertical: 10,

    marginTop: 4,
    marginBottom: 10
  },

  button: {
    width: 260,

    height: 60,

    backgroundColor: '#30B27C',

    borderRadius: 4,

    marginVertical: 1,

    paddingVertical: 13
  },
  lupas: {
    marginLeft: 65,
    paddingVertical: 1,
    marginBottom: 20
  },

  lupastext: {
    color: '#30B27C'
  },

  buttonText: {
    fontSize: 16,

    fontWeight: '500',

    color: '#ffffff',

    textAlign: 'center'
  }
});
