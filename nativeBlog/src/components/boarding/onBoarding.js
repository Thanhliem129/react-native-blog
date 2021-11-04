import React from "react";
import { 
  ImageBackground,
  Image, 
  StyleSheet, 
  Text, 
  View ,
  StatusBar, 
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";
import { setting } from "../../assets/css/setting";
import Img from '../../assets/images/BG1.png'
import Img1 from '../../assets/images/BG2.png'
import Img2 from '../../assets/images/BG3.png'
import { width, height, moderateScale } from "../../utilities/size";

const data =[
  {
    id:1,
    image:Img,
    title:'Choose Your Desire Product',
    desc:'Contraly to popular belief , Lorem isum is not simly '
  },
  {
    id:2,
    image:Img1,
    title:'Complete your shopping',
    desc:'Contraly to popular belief , Lorem isum is not simly '
  },
  {
    id:3,
    image:Img2,
    title:'Get product at your door',
    desc:'Contraly to popular belief , Lorem isum is not simly ',
    btn:true
  },
]
const Indicator = ({ scrollX}) => {
  
  return <View style={{
    position:'absolute',
    bottom:moderateScale(10),
    flexDirection:"row"
  }}>
    {data.map((item, index) => {
      const inputRange = [(index -1 ) * width, index * width, (index + 1) * width];
      const setWidth = scrollX.interpolate({
        inputRange ,
        outputRange: [10, 20, 10],
        extrapolate:'clamp'
      })
      const opacity = scrollX.interpolate({
        inputRange ,
        outputRange: [0.3, 1, 0.3],
        extrapolate:'clamp'
      })
      return (
          <Animated.View
            key={index}
            style={{
              height:5,
              width:setWidth,
              borderRadius:15,
              backgroundColor:'#048ad1',
              marginHorizontal:moderateScale(3),
              opacity:opacity,
            }}
        />
      )
    })}
  </View>
}
const OnBoarding1 = ({navigation}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return(
    // <ImageBackground source={Img} style={styles.backgroundImage}>
    // <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={false}/>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
        <Animated.FlatList 
          data={data}
          keyExtractor={item => item.id}
          horizontal
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{nativeEvent:{contentOffset:{x: scrollX}}}],
            {useNativeDriver:false}
          )}
          contentContainerStyle={{
            paddingBottom:moderateScale(100),
          }}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return(
              <View 
                style={{width, alignItems:'center', position:'relative'}}>
                  <View style={{
                    flex:0.7,
                    }}>
                    <Image 
                      source={item.image}
                      style={{
                        width:width,
                        height:height,
                        resizeMode:'cover'
                      }}/>
                  </View>
                  <View style={{
                    flex:0.3, 
                    position:'absolute',
                    bottom:0
                    }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.desc}>{item.desc}</Text>
                  </View>
                  {
                    item.btn && 
                    <TouchableOpacity style={{
                      position:'absolute',
                      bottom:moderateScale(-60),
                      backgroundColor:setting.backgroundBlue,
                      width:width * 0.8,
                      padding:setting.pDefault,
                      borderRadius:moderateScale(5)
                    }}
                      onPress={() => navigation.navigate('MainTab')}
                    >
                      <Text style={{
                        color:'#fff',
                        textAlign:'center',
                        fontSize:setting.fontDefault
                      }}>Get Started</Text>
                    </TouchableOpacity>
                  }
                  
              </View>
            )
          }}
        />
        <Indicator scrollX={scrollX} />
    </View>
    // </ImageBackground>
    
  )
}

export default OnBoarding1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems:'center', 
    justifyContent:'center'
  },
  title:{
    fontSize:moderateScale(24),
    marginBottom:moderateScale(10),
    textAlign:'center',
    fontWeight:'bold',
    color:setting.textColor,
    marginTop:moderateScale(15)
  },
  desc:{
    fontSize:moderateScale(16),
    textAlign:'center',
    width:moderateScale(300)
  }
});