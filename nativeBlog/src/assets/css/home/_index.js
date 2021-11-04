import { StyleSheet} from 'react-native';
import {
   heightScale,
   moderateScale,
 } from '../../../utilities/size';
 import { setting } from '../setting';

export const styles = StyleSheet.create({  
   container: {
     flex: 1,
     backgroundColor:setting.backGroundGray,
     position:'relative'
   },
   header: {
   },
   slide:{
     backgroundColor:setting.backgroundBlue,
     height:100,
     width:'100%'
   },
   flex: {
     flexDirection: 'row',
     margin: moderateScale(10),
     marginTop:moderateScale(11)
   },
   backgroundColor: {
     width:'100%',
     top: Platform.OS === 'ios' ? moderateScale(25) : 0,
     backgroundColor:setting.backgroundBlue
   },
   inputSearch: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent:'space-between',
     backgroundColor: '#fff',
     opacity: 1,
     height: moderateScale(35),
     borderRadius: 5,
     paddingHorizontal:10,
     width: '80%',
    
   },
 
 
 });
 