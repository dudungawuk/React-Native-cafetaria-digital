/* eslint-disable react-native/no-color-literals */
/* eslint-disable import/first */
/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Title,
  Textarea
} from 'native-base';
import { Image, TouchableOpacity, View, Alert, TextInput } from 'react-native';
import { IMAGES } from '../../configs';
import Modal from 'react-native-modal';

export default class HeaderTitleSubtitleExample extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  toggleModal1 = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible1 });
  };
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#ffffff' }}>
          <Left>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ListMenu')}>
              <Image source={IMAGES.back} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={{ color: '#000000' }}>Pesanan</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem thumbnail style={{ marginLeft: 30 }}>
              <Left>
                <Image source={IMAGES.thumbnail2} />
              </Left>
              <Body>
                <Text>Ayam Bakar</Text>
                <Text note numberOfLines={1}>
                  Rp. 15.000 x 2
                </Text>
              </Body>
              <Right>
                <TouchableOpacity onPress={this.toggleModal}>
                  <Image
                    source={IMAGES.edit}
                    style={{ width: 20, height: 20, marginRight: 20, borderRadius: 2 }}
                  />
                </TouchableOpacity>
                <Modal isVisible={this.state.isModalVisible}>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 300, height: 230, borderRadius: 5, backgroundColor: '#ffffff' }}>
                      <Right>
                        <TouchableOpacity onPress={this.toggleModal}>
                          <Image
                            source={IMAGES.x}
                            style={{ marginRight: 10, marginTop: 15, marginLeft: 260 }}
                          />
                        </TouchableOpacity>
                        <Left>
                          <Text style={{ marginLeft: 26, marginTop: 5, marginRight: 120 }}>
                            Tambahkan Catatan
                          </Text>
                          <Textarea
                            style={{
                              borderRadius: 5,
                              width: 240,
                              height: 100,
                              borderColor: 'gray',
                              borderWidth: 1,
                              marginLeft: 26,
                              marginTop: 20
                            }}
                            rowSpan={5}
                            bordered
                            placeholder="Ketikkan sesuatu disini ..."
                          />
                        </Left>
                        <TouchableOpacity onPress={this.toggleModal}>
                          <Text style={{ color: '#30B27C', marginBottom: 20, marginRight: 26 }}>Selesai</Text>
                        </TouchableOpacity>
                      </Right>
                    </View>
                  </View>
                </Modal>
              </Right>
            </ListItem>
          </List>
        </Content>
        <Modal isVisible={this.state.isModalVisible1}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 300, height: 230, borderRadius: 5, backgroundColor: '#ffffff' }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ marginTop: 30, color: '#000000' }}>Pesanan sedang diprosses...</Text>
                <Image source={IMAGES.pesananselesai} style={{ width: 65, height: 65 }} />
              </View>
              <TouchableOpacity onPress={this.toggleModal1}>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={{ color: '#30B27C', marginBottom: 20, marginRight: 26 }}>Selesai</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginBottom: 30 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Pembayaran')}>
            <View
              style={{
                borderRadius: 5,
                width: 300,
                height: 50,
                backgroundColor: '#30B27C',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: '#ffffff' }}>Pesan Sekarang</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
