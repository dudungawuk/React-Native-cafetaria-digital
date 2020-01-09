/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { SafeAreaView, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';

export default class Component extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#c4c4c4', justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.header} />
        <View
          style={{
            backgroundColor: '#ffffff',
            width: 380,
            height: 450,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
          }}
        >
          <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{ width: 50, height: 2, backgroundColor: '#c4c4c4', marginTop: 10 }} />
          </View>
          <Text style={{ marginLeft: 26, marginTop: 20, fontSize: 25, color: '#000000' }}>
            Detail Makanan
          </Text>
          <View style={{ flexDirection: 'row', marginLeft: 26, marginTop: 29 }}>
            <Image source={IMAGES.thumbnail2} style={{ width: 50, height: 50, borderRadius: 3 }} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ marginLeft: 10, marginBottom: 5 }}>Ayam Bakar</Text>
              <Text style={{ marginLeft: 10, fontSize: 15, color: '#c4c4c4' }}>Rp. 15000</Text>
            </View>
          </View>

          <Text style={{ marginLeft: 26, marginTop: 10, fontSize: 20, marginBottom: 5, color: '#000000' }}>
            Deskripsi
          </Text>
          <Text note numberOfLines={3} style={{ color: '#c4c4c4', marginLeft: 26 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non nunc non libero congue
            pellentesque sit amet non quam. Vivamus in diam nisi.
          </Text>
          <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginTop: 110 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ListMenu')}>
              <View
                style={{
                  borderRadius: 5,
                  width: 300,
                  height: 50,
                  borderWidth: 1,
                  borderColor: '#30B27C',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={{ color: '#30B27C' }}>Kembali</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
