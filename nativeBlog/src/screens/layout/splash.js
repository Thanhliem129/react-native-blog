import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LogoHL from '../../assets/images/icon/logoHl_white.png';
import * as Animatable from 'react-native-animatable';
import {
  widthScale,
  heightScale,
} from '../../utilities/size';

const Splash = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.viewStyles}
      colors={['#048ad1', '#096fad', '#00304d']}>
        <View>
          <Animatable.Image animation="bounceIn" duration={1000} source={LogoHL} style={styles.logo} />
        </View>
    </LinearGradient>
  );
};

export default Splash;

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: widthScale(150),
    height: heightScale(100),
  },
});
