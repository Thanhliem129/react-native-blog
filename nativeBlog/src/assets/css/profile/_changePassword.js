import {
   StyleSheet
} from 'react-native';
import { moderateScale,height } from '../../../utilities/size';
import { setting } from '../setting';

export const styles = StyleSheet.create({
   container:{
      flex:1,
      alignContent:'center',
      justifyContent:'center',
      backgroundColor:'#fff',
   },
   loginTop:{
      marginLeft:moderateScale(20),
      marginBottom:moderateScale(40)
   },
   title:{
      color:'black',
      fontSize:setting.fontDefault + 4,
      fontWeight:'bold',
      marginBottom:moderateScale(5)
   },
   loginSubTitle:{
      fontSize:setting.fontDefault
   },
   loginForm:{
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
      marginTop:moderateScale(50)
   },
   inputForm:{
      marginVertical:moderateScale(15)
   },
   textInput:{
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
   loginBtn:{
      backgroundColor:setting.backgroundBlue,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      padding:moderateScale(15),
      borderRadius:moderateScale(5),
      marginTop:moderateScale(30)
   },
   loginBtnTitle:{
      fontSize:moderateScale(16),
      color:'white',
      fontWeight:'bold'
   },

})