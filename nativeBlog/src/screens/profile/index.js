import React, { useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Animated,
  Image,
  FlatList
} from 'react-native';
import { moderateScale,} from '../../utilities/size';
import { styles } from '../../assets/css/profile/_index';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import ShareWithFriend from '../../assets/images/shareWithFriend.png'
import { setting } from '../../assets/css/setting';
import { dataProfile } from '../../utilities/datavirtual';

const HEADER_MAX_HEIGHT = Platform.OS === 'ios' ? moderateScale(200) : moderateScale(180);
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? moderateScale(0) : moderateScale(0);
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Profile = ({ navigation }) => {
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
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[ styles.header, {transform: [{translateY: headerTranslateY}]},]}>
          <LinearGradient style={styles.header} colors={['#048ad1', '#048ad2']}>
            <SafeAreaView>
              <Animated.View style={[ styles.headerBackground, { opacity: imageOpacity, transform: [{translateY: imageTranslateY}], }]}>
                  <Animatable.View animation="fadeInDown" duration={1000} style={styles.profileTop}>
                    <View style={{position:'relative'}}>
                      <Image 
                        style={styles.profileImage}
                        source={{uri:'https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg'}} />
                      <TouchableOpacity style={styles.iconCamera}>
                        <Icon name='camera-outline' style={styles.iconCameraInside} />
                      </TouchableOpacity>
                    </View>
                    <View style={{marginLeft:moderateScale(10)}}>
                      <Text style={styles.userName}>Thanh Liem</Text>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.userNameSub}>Thành viên hạng </Text>
                        <Text style={[styles.userNameSub,{fontWeight:'bold'}]}>Kim cương</Text>
                      </View>
                    </View>
                  </Animatable.View>
              </Animated.View>
            </SafeAreaView>
          </LinearGradient>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={{paddingTop: Platform.OS === 'ios' ? HEADER_MAX_HEIGHT - moderateScale(20) : HEADER_MAX_HEIGHT - moderateScale(10)}}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY }}}],
          {useNativeDriver: true},
      )}>
        <View style={{marginTop:moderateScale(15)}}>
          <View style={styles.summary}>
            <View style={[{width:'33%'}, styles.summaryItem]}>
              <View style={{flexDirection:'row', justifyContent:'center'}}>
                <View style={styles.summaryGroupIcon}>
                  <Material name='cash-multiple' style={styles.summaryIcon} />
                </View>
              </View>
              <Text style={{color:setting.textColor}}>Tổng đã mua</Text>
              <Text style={styles.summaryMoney}>15.000.000 vnđ</Text>
            </View>
            <View 
              style={[ styles.summaryItem1]}>
              <View style={{flexDirection:'row', justifyContent:'center'}}>
                <View style={styles.summaryGroupIcon}>
                  <Icon name='document-text-outline' style={styles.summaryIcon} />
                </View>
              </View>
              <Text style={{color:setting.textColor}}>Đơn thành công</Text>
              <Text style={styles.summaryMoney}>56</Text>
            </View>
            <View style={[{width:'33%'}, styles.summaryItem]}>
              <View style={{flexDirection:'row', justifyContent:'center'}}>
                <View style={styles.summaryGroupIcon}>
                  <Icon name='ios-receipt-outline' style={styles.summaryIcon} />
                </View>
              </View>
              <Text style={{color:setting.textColor}}>Báo giá đã gửi</Text>
              <Text style={styles.summaryMoney}>42</Text>
            </View>
          </View>
          <View style={styles.checking}>
            <TouchableOpacity style={styles.checkingItem} onPress={() => navigation.navigate('QuanLyDonHang',{Index:0})}>
              <View style={styles.checkingBadge}>
                <Text style={{color:'white'}}>2</Text>
              </View>
              <Material name='cart-outline' style={styles.checkingItemIcon} />
              <Text style={styles.checkingItemTitle}>Đơn hàng đang chờ xử lý</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.checkingItem}  onPress={() => navigation.navigate('QuanLyDonHang',{Index:1})}>
              <View style={styles.checkingBadge}>
                <Text style={{color:'white'}}>2</Text>
              </View>
              <Material name='cart-arrow-down' style={styles.checkingItemIcon}/>
              <Text style={styles.checkingItemTitle}>Đơn hàng đã tiếp nhận</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.checkingItem}  onPress={() => navigation.navigate('QuanLyDonHang',{Index:2})}>
              <Animatable.View 
                animation='fadeIn' 
                direction='reverse' 
                easing='ease-in-out' 
                iterationCount='infinite' 
                iterationDelay={2000} 
                style={styles.checkingBadge}>
                <Text style={{color:'white'}}>2</Text>
              </Animatable.View>
              <Animatable.View 
                animation='fadeOutRight' 
                easing='ease-in-out' 
                direction='alternate-reverse' 
                iterationCount='infinite' 
                iterationDelay={2000}>
                <Material name='truck-fast-outline' style={styles.checkingItemIcon}/>
              </Animatable.View>
              <Text style={styles.checkingItemTitle}>Đơn hàng đang giao</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom:moderateScale(10)}}>
            <FlatList
              data={dataProfile}
              keyExtractor={item => item.id}
              renderItem={({item})=>(
                <ProfileItem item={item} navigation={navigation} />
              )}
            />
          </View>
          <View style={{marginBottom:moderateScale(10)}}>
            <View style={styles.profileIntro}>
              <Image source={ShareWithFriend} style={styles.profileIntroImg} />
              <View>
                <Text style={styles.profileIntroTitle}>Giới thiệu App tới bạn bè</Text>
                <TouchableOpacity style={styles.profileIntroBtn}>
                  <Text style={styles.profileIntroBtnTitle}>Chia sẻ ngay</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};
export default Profile;

const ProfileItem = (props) => {
  const {item, navigation} = props;
  return(
    <TouchableOpacity 
      onPress={()=> navigation.navigate(item.link,item.Index && {Index:0})}
      style={styles.profileItemBtn}>
      <View style={styles.profileItem}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Icon name={item.icon} style={styles.profileItemIcon} />
          <Text style={styles.profileItemName}>{item.name}</Text>
        </View>
        <Icon name='ios-chevron-forward-outline' style={styles.profileItemIcon}/>
      </View>
    </TouchableOpacity>
  )
}