/* eslint-disable no-undef */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  boxplus: {
    width: 20,
    height: 20,
    backgroundColor: '#30B27C'
  },
  icon2: {
    marginRight: 16,
    marginLeft: 20
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 2
  },

  scrollView: {
    backgroundColor: '#30B27C'
  },
  list1: {
    width: 60,
    height: 2,
    backgroundColor: '#ffffff',
    marginLeft: 26,
    marginTop: 5
  },
  list: {
    color: '#ffffff',
    marginTop: 30,
    marginLeft: 26
  },

  header: {
    marginTop: 0,
    height: 150,
    backgroundColor: '#ffffff'
  },
  footer: {
    backgroundColor: '#ffffff',
    width: 400,
    height: 60,
    marginTop: 155
  },
  box1: {
    width: 340,
    height: 95,
    backgroundColor: '#ffffff',
    marginTop: 30,
    borderRadius: 5,
    marginLeft: 23,
    marginBottom: 6,
    justifyContent: 'center'
  },

  box2: {
    width: 340,
    height: 95,
    backgroundColor: '#ffffff',
    marginTop: 5,
    borderRadius: 5,
    marginLeft: 23,
    marginBottom: 6,
    justifyContent: 'center'
  },
  thumbnail: {
    width: 60,
    height: 60,
    marginBottom: 7,
    marginLeft: 15,
    marginTop: 6
  },
  title: {
    marginTop: 15,
    marginLeft: 60
  },
  deskripsi: {
    marginTop: 15,
    marginLeft: 60
  }
});

export default styles;
