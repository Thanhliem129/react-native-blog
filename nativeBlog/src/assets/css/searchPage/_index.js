import {StyleSheet} from 'react-native';
import { moderateScale, heightScale, width } from '../../../utilities/size';
import { setting } from '../setting';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:setting.backGroundGray,
    position:'relative'
  },
  flex: {
    flexDirection: 'row',
    margin: setting.mDefault,
    padding:moderateScale(5),
    paddingLeft:moderateScale(6)
  },
  backgroundColor: {
    width:'100%',
    top: Platform.OS === 'ios' ? moderateScale(25) : -5,
    backgroundColor:setting.backgroundBlue
  },
  searchInput:{
    backgroundColor:'white',
    width:'100%', 
    height:moderateScale(35), 
    paddingLeft:moderateScale(40),
    paddingRight:moderateScale(65),
    borderRadius:moderateScale(5),
  },
  searchGroupIcon:{
    flexDirection:'row', 
    alignItems:'center', 
    position:'absolute', 
    right:moderateScale(10), 
    top:moderateScale(7)
  }
  ,
  searchIconBtn:{
    position:'absolute',
    zIndex: 10,
    top:moderateScale(7),
    left:moderateScale(15)
  },
  searchIcon:{
    fontWeight:'bold'
  },
  categoryFilter:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    alignItems:'center'
  },
  categoryFilterBtn:{
    width:'50%',
    backgroundColor:'white',
    padding:moderateScale(10),
    borderRightWidth:0.5,
    borderRightColor:'#ccc'
  },
  categoryFilterContent:{
    flexDirection:'row',
    alignItems:'center'
  },
  categoryFilterIcon:{
    fontSize:setting.fontDefault + 8
  },
  categoryFilterTitle:{
    marginLeft:moderateScale(10),
    fontSize:moderateScale(18)
  },
  itemProduct:{
    paddingHorizontal:moderateScale(10),
    paddingBottom:moderateScale(105)
 },
  itemProductTitle:{
    fontSize:moderateScale(16),
    fontWeight:'bold' 
  },
  popularItem:{
    position:'relative',
    padding:10,
    alignItems:'center',
    // backgroundColor:'white',
 },
 sale:{
    height:moderateScale(25),
    width:moderateScale(25),
    top:moderateScale(5),
    left:moderateScale(5),
    backgroundColor:setting.backGroundOrange,
    borderRadius:30,
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
    fontSize:setting.fontDefault,
    color:setting.textColor
 },

})