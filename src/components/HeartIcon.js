import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Colors from '../assets/utilities/Colors';
const Height = Dimensions.get('window').height;

export const HeartIcon = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={.6}>
        <Image source={require('../assets/images/Vector.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Height * 0.04,
    width: Height * 0.04,
    borderRadius: Height * 0.02,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.GREY,
    marginBottom: Height * 0.05,
  },
  image: {
    width: Height * 0.025,
    height: Height * 0.022,
  },
});
