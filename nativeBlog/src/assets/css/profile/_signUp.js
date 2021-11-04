import {
   StyleSheet
} from 'react-native';
import { moderateScale } from '../../../utilities/size';
import { setting } from '../setting';

export const styles = StyleSheet.create({
   container:{
      flex:1,
      alignContent:'center',
      justifyContent:'center',
      backgroundColor:'#fff',
   },
   signUpTop:{
      marginBottom:moderateScale(20),
      marginTop:moderateScale(20),
      alignItems:'center'
   },
   signUpTitle:{
      color:'black',
      fontSize:28,
      fontWeight:'bold',
      marginBottom:moderateScale(5)
   },
   imageLogo:{
      width:moderateScale(200),
      height:moderateScale(150)
   },
   signUpSubTitle:{
      fontSize:setting.fontDefault,
      color:setting.backgroundBlue
   },
   signUpForm:{
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
      marginBottom:moderateScale(10),
   },
   inputForm:{
      marginVertical:moderateScale(15)
   },
   signUpInput:{
      borderBottomWidth:1, 
      borderBottomColor:'#ccc', 
      padding:0,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical:moderateScale(5),
      paddingLeft:moderateScale(5),
      fontSize:setting.fontDefault
   },
   btnEye: {
      position: 'absolute',
      top: moderateScale(20),
      right: moderateScale(10),
      color: 'red',
    },
   losePassword:{
      color:setting.backgroundBlue,
      textAlign:'right',
   }, 
   signUpBtn:{
      backgroundColor:setting.backgroundBlue,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      padding:moderateScale(15),
      borderRadius:moderateScale(5),
      marginTop:moderateScale(30)
   },
   signUpBtnTitle:{
      fontSize:moderateScale(16),
      color:'white',
      fontWeight:'bold'
   },
   haveAccount:{
      flexDirection:'row', 
      marginTop:moderateScale(10), 
      justifyContent:'center'
   },
   haveAcountTitle:{
      fontSize:setting.fontDefault -2
   },
   haveAcountTitleBlue:{
      fontSize:setting.fontDefault -2,
      color:setting.backgroundBlue
   }
})