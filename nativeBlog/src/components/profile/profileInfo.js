import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../assets/css/profile/_profile';
import Header from '../header/header';

const ProfileInfo = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} title='Thông tin tài khoản' />
      <ScrollView style={{flex:1}}>
        <View style={styles.profileTop}>
          <Text style={styles.profileTopTile}>
            Ảnh đại diện
          </Text>
          <View style={{position:'relative'}}>
            <Image 
              style={styles.profileImage}
              source={{uri:'https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg'}} />
            <TouchableOpacity style={styles.iconCamera}>
              <Icon name='camera-outline' style={styles.iconCameraInside} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profileInfo}>
          <View style={styles.profileInfoGroup}>
            <Text style={styles.profileInfoTitle}>Họ tên</Text>
            <Text style={styles.profileInfoValue}>Đặng Thanh Liêm</Text>
          </View>
          <View style={styles.profileInfoGroup}>
            <Text style={styles.profileInfoTitle}>Tên hiển thị</Text>
            <Text style={styles.profileInfoValue}>Thanhliem</Text>
          </View>
          <View style={styles.profileInfoGroup}>
            <Text style={styles.profileInfoTitle}>Email</Text>
            <Text style={styles.profileInfoValue}>Thanhliem129@gmail.com</Text>
          </View>
          <View style={styles.profileInfoGroup}>
            <Text style={styles.profileInfoTitle}>Điện thoại</Text>
            <Text style={styles.profileInfoValue}>096742353</Text>
          </View>
          <View style={styles.profileInfoGroup}>
            <Text style={styles.profileInfoTitle}>Giới tính</Text>
            <Text style={styles.profileInfoValue}>Nam</Text>
          </View>
          <View style={styles.profileInfoGroup}>
            <Text style={styles.profileInfoTitle}>Ngày sinh</Text>
            <Text style={styles.profileInfoValue}>12/09/1999</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.profileBottom}>
        <TouchableOpacity 
          style={styles.profileBottomBtnWhite} 
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={[styles.profileBottomTitle, {color:'#444'}]}>Đăng xuất</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileBottomBtnBlue}>
          <Text style={styles.profileBottomTitle}>Chỉnh sửa</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default ProfileInfo