/* eslint-disable import/first */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from 'react';
import { Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { SafeAreaView, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
import Modal from 'react-native-modal';

export default class ListTh1umbnailExample extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Header style={styles.header} />
          <Content>
            <Text style={{ marginLeft: 13, marginTop: 30, marginBottom: 10, color: '#ffffff' }}>
              Pak Dudung’s Cafe
            </Text>
            <View style={{ width: 310, height: 70, flexDirection: 'row-reverse' }}>
              <TouchableOpacity>
                <Text style={{ marginLeft: 13, marginBottom: 25, color: '#ffffff' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non ...
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.garis} />
            <View style={{ flexDirection: 'row', marginTop: 25 }}>
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 100,
                  marginRight: 50,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text style={{ color: '#ffffff', marginBottom: 5 }}>Makanan</Text>
                <View style={{ height: 1, width: 30, backgroundColor: '#ffffff' }} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: '#ffffff', marginBottom: 5 }}>Minuman</Text>
                  <View style={{ height: 1, width: 30, backgroundColor: '#ffffff' }} />
                </View>
              </View>
            </View>
            <View style={styles.box1}>
              <TouchableOpacity>
                <List>
                  <ListItem thumbnail>
                    <Left>
                      <Image source={IMAGES.thumbnail} style={styles.thumbnail} />
                    </Left>
                    <Body>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
                        <Text style={{ marginBottom: 3 }}>Ayam Bakar</Text>
                        <Text note numberOfLines={1} style={{ marginBottom: 1 }}>
                          Rp. 15.000
                        </Text>
                      </TouchableOpacity>
                    </Body>
                    <Right style={{ flexDirection: 'row' }}>
                      <TouchableOpacity>
                        <Image
                          source={IMAGES.min}
                          style={{
                            borderRadius: 2,
                            width: 20,
                            height: 20,
                            marginTop: 15,
                            marginBottom: 15,
                            marginRight: 10
                          }}
                        />
                      </TouchableOpacity>
                      <Text style={{ color: '#c4c4c4', marginTop: 15, marginBottom: 15 }}>6</Text>
                      <TouchableOpacity style={styles.boxplus}>
                        <Image
                          source={IMAGES.plus}
                          style={{
                            borderRadius: 2,
                            width: 20,
                            height: 20,
                            marginTop: 15,
                            marginBottom: 15,
                            marginRight: 5,
                            marginLeft: 10
                          }}
                        />
                      </TouchableOpacity>
                    </Right>
                  </ListItem>
                </List>
              </TouchableOpacity>
            </View>
            <Right>
              <View style={styles.kranjang}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Keranjang')}>
                  <Image source={IMAGES.keranjang} />
                </TouchableOpacity>
              </View>
            </Right>
          </Content>
        </ScrollView>
        <Modal isVisible={this.state.isModalVisible}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 150
            }}
          >
            <View style={{ width: 360, height: 450, borderRadius: 5, backgroundColor: '#ffffff' }}>
              <List>
                <ListItem thumbnail>
                  <Left>
                    <Image source={IMAGES.thumbnail} />
                  </Left>
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ListMenu')}>
                      <Text>Pesanan anda sudah siap</Text>
                      <Text note numberOfLines={1}>
                        Silahkan menikmati
                      </Text>
                    </TouchableOpacity>
                  </Body>
                  <TouchableOpacity onPress={this.toggleModal}>
                    <Text style={{ color: '#000000' }}>Kembali</Text>
                  </TouchableOpacity>
                </ListItem>
              </List>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}
