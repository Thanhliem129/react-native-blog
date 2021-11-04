import { StyleSheet } from 'react-native'
import { setting } from '../setting'
import { moderateScale } from '../../../utilities/size'

export const styles = StyleSheet.create({
  container:{
    flex:1
  },
  profileTop:{
    flexDirection:'row',
    backgroundColor:'#fff', 
    padding:setting.pDefault,
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:setting.mDefault
  },
  profileTopTile:{
    fontSize:setting.fontDefault + 2,
    color:setting.textColor
  },
  profileImage:{
    width:moderateScale(100),
    height:moderateScale(100),
    borderRadius:moderateScale(999),
    borderWidth:1,
    borderColor:'#fff'
  },
  iconCamera:{
    width:moderateScale(25),
    height:moderateScale(25),
    backgroundColor:'#fff',
    position:'absolute',
    borderRadius:moderateScale(20),
    justifyContent:'center',
    alignItems:'center',
    bottom:0, 
    right:0,
    zIndex: 10,
  },
  iconCameraInside:{
    fontSize:setting.fontDefault+4,
    color:setting.textColor,
  },
  profileInfo:{
    backgroundColor:'#fff',
    padding:setting.pDefault,

  },
  profileInfoGroup:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderBottomWidth:0.5,
    borderBottomColor:'#ccc',
    marginVertical:moderateScale(10),
    paddingBottom:moderateScale(5)
  },
  profileInfoTitle:{
    fontSize:setting.fontDefault
  },
  profileInfoValue:{
    fontSize:setting.fontDefault,
    color:setting.textColor
  },


  // bottom
  profileBottom:{
    position: 'absolute',
    bottom: 0,
    flexDirection:'row', 
    justifyContent:'space-between',
    height:moderateScale(50),
    zIndex:10,
    width:'100%'
  },
  profileBottomBtnWhite:{
    backgroundColor:'#fff',
    width:'50%',
    justifyContent:'center',
  },
  profileBottomBtnBlue:{
    backgroundColor:setting.backgroundBlue,
    width:'50%',
    justifyContent:'center',
  },
  profileBottomTitle:{
    color:'#fff',
    textAlign:'center',
    fontSize:setting.fontDefault,
  }
})