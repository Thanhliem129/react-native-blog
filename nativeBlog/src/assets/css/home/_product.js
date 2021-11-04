import {StyleSheet} from 'react-native';
import {
   heightScale,
   moderateScale,
   widthScale
} from '../../../utilities/size'
import { setting } from '../setting';

export const styles = StyleSheet.create({
   container:{
      marginTop:moderateScale(10)
   },
   imageSlider:{
      width: moderateScale(180),
      height:moderateScale(180),
      marginHorizontal:moderateScale(10),
      borderRadius:moderateScale(10),
   },
   popular:{
      marginTop:moderateScale(10),
      padding:moderateScale(10)
   },
   headerPopular:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
   },
   popularTitle:{
      fontWeight:'bold',
      fontSize:setting.fontDefault + 2,
      color:setting.textColor
   },
   seeMore:{
      color:setting.backgroundBlue,
      fontSize:setting.fontDefault - 2
   },
   popularItem:{
      position:'relative',
      padding:moderateScale(10),
      alignItems:'center'
   },
   sale:{
      height:moderateScale(25),
      width:moderateScale(25),
      top:moderateScale(5),
      left:moderateScale(5),
      backgroundColor:setting.backGroundOrange,
      borderRadius:moderateScale(30),
      position:'absolute',
      alignItems:'center',
      justifyContent:'center'
   },
   saleText:{
      fontSize:10,
      color:'white'
   },
   popularItemImage:{
      width:'100%',
      height:'100%'
   },
   popularItemText:{
      fontSize:moderateScale(12),
      color:setting.textColor
   },
   distributor:{
      height:heightScale(130),
      padding:moderateScale(10)
   },
   imageDistributor:{
      flex: 1,
   },
   distributorContent:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingHorizontal:10
   },
   distributorTitle:{
      textTransform:'uppercase',
      width:widthScale(130),
      marginTop:moderateScale(30),
      fontWeight:'bold',
      color:setting.textColor,
      fontSize:setting.fontDefault + 2
   },
   distributorBtn:{
      backgroundColor:setting.backgroundBlue,
      padding:moderateScale(7),
      borderRadius:moderateScale(3),
      marginTop:moderateScale(30),
      paddingHorizontal:moderateScale(10)
   },
   groupProduct:{
      borderRadius:moderateScale(10),
      padding:moderateScale(10)
   },
   groupProductTitle:{
      fontSize:setting.fontDefault + 2,
      fontWeight:'bold'
   },
   favoriteProduct:{
      padding:moderateScale(10)
   },
   favoriteProductTitle:{
      fontSize:setting.fontDefault + 2,
      fontWeight:'bold' 
   },
})