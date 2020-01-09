import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';
import IMAGES from '../../configs/images';

export default class Component extends React.Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Login');
    }
  }

  performTimeConsumingTask = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000)
    );
  render() {
    return (
      <View style={{ flex:1,  backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={IMAGES.logo} resizeMode="contain" style={{ height: 100}} />
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
