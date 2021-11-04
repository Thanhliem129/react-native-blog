import { StyleSheet } from 'react-native';
import { setting } from '../setting';
import { moderateScale } from '../../../utilities/size';
const HEADER_MAX_HEIGHT = Platform.OS === 'ios' ? moderateScale(200) : moderateScale(180);
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#eee'
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  profileTop:{
    flexDirection:'row',
    alignItems:'center',
    padding:moderateScale(20)
  },
  profileImage:{
    width:moderateScale(80),
    height:moderateScale(80),
    borderRadius:moderateScale(40),
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
  userName:{
    color:'#fff',
    fontSize:setting.fontDefault + 6,
    fontWeight:'bold'
  },
  userNameSub:{
    color:'#fff',
    fontSize:setting.fontDefault,
    marginTop:moderateScale(5)
  },
  summary:{
    marginHorizontal:moderateScale(15),
    borderRadius:moderateScale(10),
    backgroundColor:'#fff',
    marginTop:moderateScale(-60),
    flexDirection:'row',
    justifyContent:'space-around',
    paddingVertical:moderateScale(15),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },
  summaryItem:{
    justifyContent:'center',
    alignItems:'center',
    width:'33%'
  },
  summaryItem1:{
    justifyContent:'center',
    alignItems:'center',
    width:'34%',
    borderRightWidth:0.5,
    borderLeftWidth:0.5,
    borderColor:'#ccc'
  },
  summaryGroupIcon:{
    flexDirection:'row', 
    justifyContent:'center',
    alignItems:'center',
    width:moderateScale(40),
    height:moderateScale(40),
    borderWidth:1.5,
    borderRadius:moderateScale(20),
    borderColor:setting.backgroundBlue,
    marginBottom:moderateScale(5)
  },
  summaryIcon:{
    fontSize:setting.fontDefault + 8,
    color:setting.backgroundBlue
  },
  summaryMoney:{
    fontWeight:'bold',
    color:setting.backgroundBlue
  },
  checking:{
    backgroundColor:'#fff',
    marginVertical:moderateScale(10),
    padding:moderateScale(15),
    flexDirection:'row',
    width:'100%'
  },
  checkingItem:{
    width:'33%',
    padding:moderateScale(0),
    alignItems:'center',
  },
  checkingBadge:{
    width:moderateScale(20),
    height:moderateScale(20),
    backgroundColor:setting.backgroundDanger,
    borderRadius:moderateScale(20),
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    zIndex:10,
    right:moderateScale(40),
    top:moderateScale(-10)
  },
  checkingItemIcon:{
    fontSize:setting.fontDefault + 16,
    marginBottom:moderateScale(5)
  },
  checkingItemTitle:{
    textAlign:'center',
    color:setting.textColor
  },
  profileItemBtn:{
    padding:moderateScale(15),
    backgroundColor:'#fff',
    borderTopWidth:0.5,
    borderColor:'#ccc',
    borderBottomWidth:0.5,
  },
  profileItem:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  profileItemIcon:{
    fontSize:setting.fontDefault + 12
  },
  profileItemName:{
    fontSize:setting.fontDefault + 4,
    marginLeft:moderateScale(10),
    color:setting.textColor
  },
  profileIntro:{
    marginHorizontal:moderateScale(10),
    backgroundColor:'#fff',
    padding:setting.pDefault,
    borderRadius:moderateScale(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  profileIntroImg:{
    width:moderateScale(130),
    height:moderateScale(70)
  },
  profileIntroTitle:{
    fontSize:setting.fontDefault,
    color:setting.textColor
  },  
  profileIntroBtn:{
    padding:moderateScale(5),
    backgroundColor:setting.backgroundBlue,
    width:moderateScale(110),
    paddingHorizontal:moderateScale(10),
    marginTop:setting.mDefault,
    borderRadius:moderateScale(5)
  },
  profileIntroBtnTitle:{
    textAlign:"center",
    color:'#fff',
    fontSize:setting.fontDefault -2
  }
})