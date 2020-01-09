/* eslint-disable react-native/no-color-literals */
import React, { Component } from 'react';
import {
  View,
  Container,
  Header,
  Content,
  Accordion,
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Right,
  Button
} from 'native-base';
import { TextInput, Image, TouchableOpacity } from 'react-native';
import IMAGES from '../../configs/images';
import Modal from 'react-native-modal';

export default class AccordionExample extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    return (
      <Container>
        <Content padder>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail style={{ borderRadius: 5 }} square source={IMAGES.profile} />
              </Left>
              <Body>
                <Text style={{ color: '#000000' }}>Reyhan Athaya</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right style={{ marginBottom: 40 }}>
                <TouchableOpacity onPress={this.toggleModal}>
                  <Image source={IMAGES.edit} style={{ width: 20, height: 20, borderRadius: 2 }} />
                </TouchableOpacity>
              </Right>
              <Modal isVisible={this.state.isModalVisible}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <View style={{ width: 300, height: 334, borderRadius: 5, backgroundColor: '#ffffff' }}>
                    <View style={{ alignItems: 'flex-end', marginTop: 12, marginRight: 12 }}>
                      <TouchableOpacity onPress={this.toggleModal}>
                        <Image source={IMAGES.x} />
                      </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 6, marginLeft: 26, marginBottom: 20 }}>
                      <Text>Edit</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <TextInput style={{width:240, height: 40, borderRadius: 2, borderWidth: 1, marginBottom: 10}} />
                      <TextInput style={{width:240, height: 40, borderRadius: 2, borderWidth: 1, marginBottom: 10}} />
                      <TextInput style={{width:240, height: 40, borderRadius: 2, borderWidth: 1, marginBottom: 10}} />
                      <TextInput style={{width:240, height: 40, borderRadius: 2, borderWidth: 1, marginBottom: 10}} />
                    </View>
                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 15, marginRight: 26}}>
                      <Text style={{color: '#30B27C'}}>Selesai</Text>
                    </View>
                  </View>
                </View>
              </Modal>
            </ListItem>
          </List>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 320, height: 1, backgroundColor: '#808080' }} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <View
              style={{
                flexDirection: 'row',
                width: 320,
                height: 60,
                backgroundColor: '#ffffff'
              }}
            >
              <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text style={{ color: '#000000', fontSize: 20 }}>Email</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginLeft: 260 }}>
                <Image source={IMAGES.arah} />
              </View>
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 320, height: 1, backgroundColor: '#808080' }} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 320, height: 1, backgroundColor: '#808080' }} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <View
              style={{
                flexDirection: 'row',
                width: 320,
                height: 60,
                backgroundColor: '#ffffff'
              }}
            >
              <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text style={{ color: '#000000', fontSize: 20 }}>Kata Sandi</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginLeft: 260 }}>
                <Image source={IMAGES.arah} />
              </View>
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 320, height: 1, backgroundColor: '#808080' }} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 320, height: 1, backgroundColor: '#808080' }} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <View
              style={{
                flexDirection: 'row',
                width: 320,
                height: 60,
                backgroundColor: '#ffffff'
              }}
            >
              <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text style={{ color: '#000000', fontSize: 20 }}>FAQ</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginLeft: 260 }}>
                <Image source={IMAGES.arah} />
              </View>
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 320, height: 1, backgroundColor: '#808080' }} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 320, height: 1, backgroundColor: '#808080' }} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <View
              style={{
                flexDirection: 'row',
                width: 320,
                height: 60,
                backgroundColor: '#ffffff'
              }}
            >
              <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text style={{ color: '#000000', fontSize: 20 }}>Tentang Aplikasi</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginLeft: 260 }}>
                <Image source={IMAGES.arah} />
              </View>
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 320, height: 1, backgroundColor: '#808080' }} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 320, height: 1, backgroundColor: '#808080' }} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <View
              style={{
                flexDirection: 'row',
                width: 320,
                height: 60,
                backgroundColor: '#ffffff'
              }}
            >
              <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text style={{ color: '#000000', fontSize: 20 }}>Bantuan</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginLeft: 260 }}>
                <Image source={IMAGES.arah} />
              </View>
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 320, height: 1, backgroundColor: '#808080' }} />
          </View>
        </Content>
      </Container>
    );
  }
}
