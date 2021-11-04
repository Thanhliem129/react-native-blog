import {StyleSheet} from 'react-native';
import { moderateScale } from '../../../utilities/size';
import { setting } from '../setting';

export const styles = StyleSheet.create({
   container:{
      flex:1,
      alignContent:'center',
      justifyContent:'center',
      backgroundColor:'#fff',
   },
   resetTop:{
      marginLeft:moderateScale(20),
      marginVertical:moderateScale(40)
   },
   resetTitle:{
      color:'black',
      fontSize:28,
      fontWeight:'bold',
      marginBottom:moderateScale(5)
   },
   resetSubTitle:{
      fontSize:setting.fontDefault
   },
   resetForm:{
      backgroundColor:'white',
      padding:moderateScale(20),
      paddingVertical:moderateScale(40),
      marginHorizontal:moderateScale(20),
      borderRadius:moderateScale(10),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 3,
      marginVertical:moderateScale(10),
   },
   inputForm:{
      marginVertical:moderateScale(15)
   },
   resetInput:{
      borderBottomWidth:1, 
      borderBottomColor:'#ccc', 
      padding:0,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical:moderateScale(5),
      paddingLeft:moderateScale(5),
      fontSize:setting.fontDefault,
      marginTop:moderateScale(5)
   },
 
   resetBtn:{
      backgroundColor:setting.backgroundBlue,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      padding:moderateScale(15),
      borderRadius:moderateScale(5),
      marginTop:moderateScale(30)
   },
   resetBtnTitle:{
      fontSize:moderateScale(16),
      color:'white',
      fontWeight:'bold'
   },
})