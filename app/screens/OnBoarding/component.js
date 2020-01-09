import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';

export default class Component extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={IMAGES.tavernIcon} resizeMode="contain" style={styles.logo} />
        </View>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
