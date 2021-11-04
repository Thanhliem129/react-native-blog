import React, {useState, useMemo, useRef} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Platform,
  StatusBar
} from 'react-native';
import Img from '../../assets/images/Leipole-1070x440-01.jpg'
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import { moderateScale, width, heightScale } from '../../utilities/size';

const HEADER_MAX_HEIGHT = Platform.OS === 'ios' ? moderateScale(180) : moderateScale(170);

const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? moderateScale(100) : moderateScale(80);
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Slider = () => {

  const scrollY = useRef(new Animated.Value(0)).current;
  const data = [Img, Img, Img, Img];

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 200],
    extrapolate: 'clamp',
  });
  return (
    <View style={styles.container}>
       <StatusBar
        animated={true}
        backgroundColor="#048ad1"
        showHideTransition='fade'
       />
      <SwiperFlatList
        autoplayLoop
        autoplayDelay={3}
        paginationDefaultColor="#eee"
        paginationActiveColor="#1566D5"
        showPagination
        paginationStyleItem={styles.pagination}
        data={data}
        renderItem={() => (
          <View style={styles.viewSlider}>
            <View style={styles.slider}>
              <Animated.Image
                blurRadius={7}
                source={Img}
                style={[
                  styles.headerBackground,
                  styles.image,
                  {
                    opacity: imageOpacity,
                    transform: [{translateY: imageTranslateY}],
                  },
                ]}
                resizeMode={'contain'}
              />
            </View>
            <View style={styles.slider1}>
              <Animated.Image
                source={Img}
                style={[
                  styles.headerBackground,
                  styles.image1,
                  {
                    opacity: imageOpacity,
                    transform: [{translateY: imageTranslateY}],
                  },
                ]}
                resizeMode="contain"
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Slider;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  viewSlider: {
    zIndex: 2,
  },
  slider: {
    width,
    justifyContent: 'center',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
    opacity: 1,
  },
  headerBackground: {
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  slider1: {
    marginHorizontal: 10,
  },
  image1: {
    height: moderateScale(140),
    width: '100%',
    resizeMode: 'contain',
    opacity: 1,
    top: Platform.OS === 'ios' ? moderateScale(-80) : moderateScale(-100),
    paddingTop: Platform.OS === 'ios' ? 0 : 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  image: {
    minHeight: Platform.OS === 'ios' ? moderateScale(160) : moderateScale(135),
    width: '100%',
    resizeMode: 'cover',
    borderColor: 'transparent',
    borderRadius: 0,
  },
  pagination: {
    width: moderateScale(7),
    height: moderateScale(7),
  },
});
