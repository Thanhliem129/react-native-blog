import {StyleSheet} from 'react-native'
import { moderateScale } from '../../../utilities/size';
import { setting } from '../setting';

export const styles = StyleSheet.create({
   groupIcon:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:moderateScale(10),
      width:'100%'
    },
    iconBorder:{
      width:"20%",
      textAlign:'center',
      alignItems:'center'
    },
    iconItem: {
      backgroundColor:setting.backgroundBlue,
      borderRadius:moderateScale(40),
      width:moderateScale(52),
      height:moderateScale(52),
    },
    icon:{
      flexDirection:'row', 
      alignItems:"center", 
      justifyContent:'center', 
      height:'100%'
    },
    itemName:{
      fontSize:setting.fontDefault -2,
      textAlign:'center'
    }
})