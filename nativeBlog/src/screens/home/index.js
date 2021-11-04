import React, {useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Animated,
  StyleSheet,
  StatusBar,
  FlatList
} from 'react-native';
import { Menu } from "native-base"
import { moderateScale } from '../../utilities/size';
import Slider from '../../components/home/slider';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Menu1 from '../../components/home/menu';
import { dataMenuHome } from '../../utilities/dataMenu';

const HEADER_MAX_HEIGHT = Platform.OS === 'ios' ? moderateScale(240) : moderateScale(220);
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? moderateScale(90) : moderateScale(60);
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Home = ({navigation}) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 1],
    extrapolate: 'clamp',
  });
  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -5],
    extrapolate: 'clamp',
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={false}/>
      <Animated.ScrollView
        contentContainerStyle={{paddingTop: Platform.OS === 'ios' ? HEADER_MAX_HEIGHT - moderateScale(20) : HEADER_MAX_HEIGHT - moderateScale(10)}}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY }}}],
          {useNativeDriver: true},
        )}>
          <View style={{marginTop:moderateScale(15)}}>
            <Menu1 navigation={navigation} />
          </View>
        </Animated.ScrollView>
      <Animated.View
        style={[
          styles.header,
          styles.slide,
          {transform: [{translateY: headerTranslateY}]},
        ]}>
          <LinearGradient style={styles.header} colors={['#048ad1', '#048ad2']}>
            <SafeAreaView>
              <Animated.View style={[
                styles.headerBackground,
                {
                  opacity: imageOpacity,
                  transform: [{translateY: imageTranslateY}],
                  },
              ]}>
                <Slider />
              </Animated.View>
            </SafeAreaView>
          </LinearGradient>
      </Animated.View>
      <Animated.View style={[ styles.topBar,
        {
          transform: [{scale: titleScale}, {translateY: titleTranslateY}],
        },
      ]}>
        <View style={[styles.backgroundColor,{marginTop:Platform.OS === 'ios' ? moderateScale(-15): moderateScale(-5)}]}>
          <View style={styles.flex}>
            <TouchableOpacity style={styles.inputSearch} onPress={() => navigation.navigate('Search')}>
              <Icon name="ios-search" style={styles.icon} />
              <View>
                <Text>Nhập mã hàng</Text>
              </View>
              <Icon size={22} name="ios-mic-outline" style={[styles.iconRight, {right: 40}]} />
              <Text style={[styles.iconRight, {right: 35, top: 5, fontSize: moderateScale(18)}]}>
                |
              </Text>
              <Icon name="ios-scan-sharp" style={styles.iconRight} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:10}} onPress={()=>navigation.navigate('Cart')}>
              <Icon name='cart-outline' style={{color:'white'}} size={moderateScale(30)} />
            </TouchableOpacity>
            <Menu w="190" trigger={(triggerProps) => {
              return (
                <TouchableOpacity {...triggerProps}>
                  <Icon name='ios-ellipsis-vertical' style={{color:'white'}} size={moderateScale(24)} />
                </TouchableOpacity>
              )
            }} >
              <FlatList
                keyExtractor={item => item.id}
                data={dataMenuHome}
                renderItem={({item, index}) => (
                  <Menu.Item  
                    key={index}  
                    style={styles.menu}
                    onPress ={() => navigation.navigate(item.link)}>
                    <Icon name={item.icon} size={moderateScale(12)} />
                    <Text style={styles.menuItem}>
                      {item.name}
                    </Text>
                  </Menu.Item>
                )}
              />
            </Menu>
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  topBar: {
    marginTop: Platform.OS === 'ios' ? moderateScale(25) : moderateScale(10) ,
    height: moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    backgroundColor:'#eee'
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    margin: 10,
  },
  backgroundColor: {
    position: 'absolute',
    marginHorizontal: 10,
    top: Platform.OS === 'ios' ? moderateScale(25) : 0,
  },
  inputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    opacity: 1,
    height: moderateScale(35),
    borderRadius: 5,
    paddingLeft: 15,
    width: '85%',
  },
  icon: {
    color: '#777',
    marginRight: 10,
    fontSize: moderateScale(20),
  },
  iconRight: {
    color: '#777',
    fontWeight: 'bold',
    position: 'absolute',
    right: 10,
    fontSize: moderateScale(20),
  },
  iconBell: {
    color: '#fff',
    fontSize: 24,
    left: moderateScale(-5),
  },
  menu:{
    flexDirection:'row',
    alignItems:"center"
  },
  menuItem:{
    marginLeft:moderateScale(5)
  }
});
