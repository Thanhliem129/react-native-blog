import React, {useState, useRef, useEffect} from 'react';
import {
   View,
   Text, 
   TouchableOpacity,
   TextInput,
   KeyboardAvoidingView,
   ScrollView
} from 'react-native';
import { styles } from '../../assets/css/profile/_verificationCode';
import { setting } from '../../assets/css/setting';
import Header from '../header/header';

const VerificationCode = ({navigation}) => {
   let textInput = useRef(null);
   const lengthInput = 6
   const [internalVal, setInternalVal] = useState('');
   const onChangeText = (val) => {
      setInternalVal(val)
   }

   useEffect(()=>{
      textInput.focus()
   },[])
   return(
      <View style={styles.container}>
         <Header onPress={() => navigation.goBack()} title='Xác thực' />
         
         <ScrollView>
            <View style={styles.verificationTop}>
               <Text style={styles.verificationSubTitle}>
                  Chúng tôi sẽ gửi cho bạn mã PIN để tiếp tục
               </Text>
            </View>
            <View style={styles.verificationForm}>
               <View style={styles.inputForm}>
                  <Text style={{fontSize:setting.fontDefault}}>PIN</Text>
                  <View>
                     <TextInput 
                        ref= {(input) => textInput = input}
                        onChangeText={onChangeText}
                        style={{width:0, height:0}}
                        value={internalVal}
                        returnKeyType='done'
                        maxLength={6}
                        keyboardType="numeric"
                     />
                     <View style={styles.containerInput} >
                        {
                           Array(lengthInput).fill().map((item, index)=>(
                              <TouchableOpacity 
                                 style={styles.cellView}
                                 key={index}
                                 onPress = {() => textInput.focus()}
                              >
                                 <Text style={styles.cellText}  >
                                    {internalVal && internalVal.length > 0 ? internalVal[index] : ''}
                                 </Text>
                              </TouchableOpacity>
                           ))
                        }
                     </View>
                  </View>
               </View>
               <View>
                  <TouchableOpacity style={styles.verificationBtn} >
                     <Text style={styles.verificationBtnTitle}>Gửi</Text>
                  </TouchableOpacity>
               </View>
            </View> 
         </ScrollView>
      </View>
   )
}
export default VerificationCode;