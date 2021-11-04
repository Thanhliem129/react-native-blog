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
   verificationTop:{
      marginLeft:moderateScale(20),
      marginVertical:moderateScale(40)
   },
   verificationTitle:{
      color:'black',
      fontSize:28,
      fontWeight:'bold',
      marginBottom:moderateScale(5)
   },
   verificationSubTitle:{
      fontSize:setting.fontDefault
   },
   verificationForm:{
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
   verificationInput:{
      borderBottomWidth:1, 
      borderBottomColor:'#ccc', 
      padding:0,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical:moderateScale(5),
      paddingLeft:moderateScale(5)
   },
 
   verificationBtn:{
      backgroundColor:setting.backgroundBlue,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      padding:moderateScale(15),
      borderRadius:moderateScale(5),
      marginTop:moderateScale(30)
   },
   verificationBtnTitle:{
      fontSize:moderateScale(16),
      color:'white',
      fontWeight:'bold'
   },
   containerInput:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
   },
   cellView:{
      paddingVertical:moderateScale(11),
      width: moderateScale(40),
      height:moderateScale(52),
      margin:moderateScale(5),
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1.5,
      borderRadius:moderateScale(10),
      borderColor:'tomato'
   },
   cellText:{
      textAlign:'center',
      fontSize:moderateScale(18)
   },
})