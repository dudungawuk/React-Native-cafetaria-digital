/* eslint-disable react/sort-comp */
/* eslint-disable import/first */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from 'react';
import { Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { SafeAreaView, View, ScrollView, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
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
          <Header style={styles.header}>
            <Left>
              <Image source={IMAGES.profile} style={styles.profile} />
              <Text style={{ color: '#71DBA7', marginTop: 8 }}>Halo,</Text>
              <Text style={{ color: '#71DBA7', marginTop: 5 }}>Raihan Athaya</Text>
            </Left>
            <Right style={{ marginBottom: 50 }}>
              <TouchableOpacity>
                <Image source={IMAGES.search} style={styles.icon1} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.toggleModal}>
                <Image source={IMAGES.pemberitahuan} style={styles.icon2} />
              </TouchableOpacity>
              <Modal isVisible={this.state.isModalVisible}>
                <View
                  style={{
                    flexDirection: 'row-reverse',
                    justifyContent: 'flex-start',
                    marginBottom: 110,
                    marginRight: 60
                  }}
                >
                  <View style={{ width: 250, height: 400, borderRadius: 5, backgroundColor: '#ffffff' }}>
                    <View style={{ marginRight: 10, marginTop: 10, flexDirection: 'row-reverse' }}>
                      <TouchableOpacity onPress={this.toggleModal}>
                        <Image source={IMAGES.pemberitahuan} style={styles.icon2} />
                      </TouchableOpacity>
                    </View>
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
                      </ListItem>
                    </List>
                  </View>
                </View>
              </Modal>
            </Right>
          </Header>
          <Content>
            <Text style={styles.list}>List Cafe</Text>
            <View style={styles.list1} />
            <View style={styles.box1}>
              <List>
                <ListItem thumbnail>
                  <Left>
                    <Image source={IMAGES.thumbnail} />
                  </Left>
                  <Body>
                    <TouchableOpacity onPress={this.toggleModal}  >
                      <Text style={{ marginBottom: 5, marginTop: 10 }}>Pak Dudung’s Cafe</Text>
                      <Text note numberOfLines={2} style={{ marginBottom: 15 }}>
                        Aneka Ayam, Aneka lele, Aneka Lumpia
                      </Text>
                    </TouchableOpacity>
                  </Body>
                </ListItem>
              </List>
            </View>
          </Content>
          {/* 
          <Content>
            <TouchableOpacity style={styles.box2}>
              <List>
                <ListItem thumbnail>
                  <Left>
                    <Image source={IMAGES.thumbnail} />
                  </Left>
                  <Body>
                    <Text style={{ marginBottom: 5 }}>Pak Dudung’s Cafe</Text>
                    <Text note numberOfLines={1} style={{ marginBottom: 15 }}>
                      Aneka Ayam, Aneka lele, Aneka Lumpia
                    </Text>
                  </Body>
                </ListItem>
              </List>
            </TouchableOpacity>
          </Content>

          <Content>
            <TouchableOpacity style={styles.box2}>
              <List>
                <ListItem thumbnail>
                  <Left>
                    <Image source={IMAGES.thumbnail} />
                  </Left>
                  <Body>
                    <Text style={{ marginBottom: 5 }}>Pak Dudung’s Cafe</Text>
                    <Text note numberOfLines={1} style={{ marginBottom: 15 }}>
                      Aneka Ayam, Aneka lele, Aneka Lumpia
                    </Text>
                  </Body>
                </ListItem>
              </List>
            </TouchableOpacity>
          </Content>

          <Content>
            <TouchableOpacity style={styles.box2}>
              <List>
                <ListItem thumbnail>
                  <Left>
                    <Image source={IMAGES.thumbnail} />
                  </Left>
                  <Body>
                    <Text style={{ marginBottom: 5 }}>Pak Dudung’s Cafe</Text>
                    <Text note numberOfLines={1} style={{ marginBottom: 15 }}>
                      Aneka Ayam, Aneka lele, Aneka Lumpia
                    </Text>
                  </Body>
                </ListItem>
              </List>
            </TouchableOpacity>
          </Content>

          <Content>
            <TouchableOpacity style={styles.box2}>
              <List>
                <ListItem thumbnail>
                  <Left>
                    <Image source={IMAGES.thumbnail} />
                  </Left>
                  <Body>
                    <Text style={{ marginBottom: 5 }}>Pak Dudung’s Cafe</Text>
                    <Text note numberOfLines={1} style={{ marginBottom: 15 }}>
                      Aneka Ayam, Aneka lele, Aneka Lumpia
                    </Text>
                  </Body>
                </ListItem>
              </List>
            </TouchableOpacity>
          </Content> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
