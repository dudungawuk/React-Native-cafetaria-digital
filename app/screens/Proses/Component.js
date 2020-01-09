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
          <Content style={{}}>
            <View style={{ flexDirection: 'row', marginTop: 25 }}>
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 90,
                  marginRight: 50,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text style={{ color: '#ffffff', marginBottom: 5 }}>Dalam Proses</Text>
                <View style={{ height: 1, width: 30, backgroundColor: '#ffffff' }} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: '#c4c4c4', marginBottom: 5 }}>Selesai</Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity style={styles.box1}>
                <List>
                  <ListItem thumbnail>
                    <Left>
                      <Image source={IMAGES.thumbnail} />
                    </Left>
                    <Body>
                      <Text style={{ marginBottom: 5 }}>Pak Dudung’s Cafe</Text>
                      <Text note numberOfLines={1} style={{ marginBottom: 1 }}>
                        Pesanan Anda :
                      </Text>
                      <Text note numberOfLines={1}>
                        Ayam Panggang, Lele Goreng, Bebek Geprek
                      </Text>
                    </Body>
                    <TouchableOpacity onPress={this.toggleModal}>
                      <Right style={{ marginBottom: 42 }}>
                        <Text style={{ color: '#30B27C' }}>Bayar</Text>
                      </Right>
                    </TouchableOpacity>
                    <Modal isVisible={this.state.isModalVisible}>
                      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View
                          style={{ width: 300, height: 230, borderRadius: 5, backgroundColor: '#ffffff' }}
                        >
                          <View style={{ alignItems: 'flex-end' }}>
                            <Right>
                              <Image source={IMAGES.x} />
                            </Right>
                          </View>
                          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{}}>Transaksi pesanan telah selesai</Text>
                            <Image
                              source={IMAGES.pesananselesai}
                              style={{ marginTop: 30, marginBottom: 10, width: 65, height: 65 }}
                            />
                          </View>
                          <View style={{ justifyContent: 'flex-end' }}>
                            <Right>
                              <TouchableOpacity onPress={this.toggleModal}>
                                <Text style={{ color: '#30B27C', marginBottom: 20, marginRight: 26 }}>
                                  Selesai
                                </Text>
                              </TouchableOpacity>
                            </Right>
                          </View>
                        </View>
                      </View>
                    </Modal>
                  </ListItem>
                </List>
              </TouchableOpacity>
              <View
                style={{
                  width: 340,
                  height: 40,
                  backgroundColor: '#E8E8E8',
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  flex: 1,
                  flexDirection: 'row'
                }}
              >
                <Left
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 50
                  }}
                >
                  <Image source={IMAGES.jam} style={{ width: 15, height: 15, marginRight: 10 }} />
                  <Text>11 : 45 AM</Text>
                </Left>
                <Right style={{ marginRight: 10 }}>
                  <Text>Rp. 35.000</Text>
                </Right>
              </View>
            </View>
          </Content>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
