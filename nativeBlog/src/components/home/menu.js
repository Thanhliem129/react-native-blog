import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../../assets/css/home/_menu';
import { moderateScale } from '../../utilities/size';

const Menu = ({navigation}) => {

   return(
      <View style={styles.groupIcon}>
        <ButtonItem 
          onPress={() => navigation.navigate('MainCategory')}
          icon='grid'
          size={22}
          title='Danh mục'
          animation='rubberBand'
          />

        <ButtonItem 
          onPress={() => console.log('a')}
          icon='create-sharp'
          size={22}
          title='Kiểm tra giá & kho'/>

        <ButtonItem 
          onPress={() => navigation.navigate('Voucher')}
          icon='pricetag'
          size={22}
          title='Voucher'/>

        <ButtonItem 
          onPress={() => console.log('a')}
          icon='md-copy'
          size={22}
          title='Combo'/>
          
        <ButtonItem 
          onPress={() => navigation.navigate('DatHangNhanh')}
          icon='chatbubbles-sharp'
          size={22}
          title='Đặt hàng'/>
      </View>
   )
}

export default Menu;

const ButtonItem = (props) => {

  const { onPress, icon, size, title, animation } = props
  
  return (
    <View style={styles.iconBorder}>
      <TouchableOpacity style={styles.iconItem} onPress={onPress}>
        <Animatable.View animation={animation} duration={2000} iterationCount='infinite' style={styles.icon}>
          <Icon name={icon} size={moderateScale(size)} color='white' />
        </Animatable.View>
      </TouchableOpacity>
      <Text style={styles.itemName}>{title}</Text>
    </View>
  )

}