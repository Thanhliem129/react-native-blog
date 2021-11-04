import React, {useState} from 'react';
import {
   View,
   Text,
   TextInput,
   TouchableOpacity,
   ScrollView,
   KeyboardAvoidingView,
   Image,
   Alert
} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import Logo from '../../assets/images/logo_hoplong.png'
import { styles } from '../../assets/css/profile/_signUp';
import Icon from 'react-native-vector-icons/Ionicons'
import { setting } from '../../assets/css/setting';
import Header from '../header/header';

const SignUp = ({navigation}) => {
   const { control, handleSubmit, formState: { errors } } = useForm();

   const [showPass, setShowPass] = useState(true);
   const [showPass1, setShowPass1] = useState(true);

   const onSubmit = (data) => {
      Alert.alert('Thông tin đã được gửi đi')
      console.log(data);
   }
   return(
      
      <KeyboardAvoidingView style={{flex:1}}>
         <View style={styles.container}>
            <Header onPress={() => navigation.goBack()} title='Đăng ký' />  
            <ScrollView style={{backgroundColor:'white'}}>
               <View style={styles.signUpTop}>
                  <Image
                     style={styles.imageLogo}
                     source={Logo} />
                  <Text style={styles.signUpSubTitle}>
                     Always Ready To Be Different
                  </Text>
               </View>
               <View style={styles.signUpForm}>
                  <View style={styles.inputForm}>
                     <Text style={{fontSize:setting.fontDefault}}>Tên</Text>
                     <Controller control={control} rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                           <TextInput
                              style={styles.signUpInput}
                              keyboardType={'email-address'}
                              onBlur={onBlur}
                              onChangeText={onChange}
                              value={value}
                              placeholder='User name'
                           />
                        )}
                        name="userName"
                        defaultValue=""
                     />
                     {errors.userName && <Text>This is required.</Text>}
                  </View>
                  <View style={styles.inputForm}>
                     <Text style={{fontSize:setting.fontDefault}}>Email</Text>
                     <Controller control={control} rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                           <TextInput
                              style={styles.signUpInput}
                              keyboardType={'email-address'}
                              onBlur={onBlur}
                              onChangeText={onChange}
                              value={value}
                              placeholder='Email'
                           />
                        )}
                        name="email"
                        defaultValue=""
                     />
                     {errors.email && <Text>This is required.</Text>}
                  </View>
                  <View style={styles.inputForm}>
                     <Text style={{fontSize:setting.fontDefault}}>Số điện thoại</Text>
                     <Controller control={control} rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                           <TextInput
                              style={styles.signUpInput}
                              keyboardType={'numeric'}
                              onBlur={onBlur}
                              onChangeText={onChange}
                              value={value}
                              placeholder='Email'
                           />
                        )}
                        name="phoneNumber"
                        defaultValue=""
                     />
                     {errors.phoneNumber && <Text>This is required.</Text>}
                  </View>
                  <View style={styles.inputForm}>
                     <Text style={{fontSize:setting.fontDefault}}>Mật khẩu</Text>
                     <Controller control={control} rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                           <TextInput
                              style={styles.signUpInput}
                              onBlur={onBlur}
                              onChangeText={onChange}
                              value={value}
                              placeholder='Password'
                              secureTextEntry={showPass}
                           />
                        )}
                        name="password"
                        defaultValue=""
                     />
                     {errors.password && <Text>This is required.</Text>}
                     <TouchableOpacity
                        style={styles.btnEye}
                        onPress={() => setShowPass(!showPass)}>
                           {showPass ? (  <Icon
                           name={'ios-eye-outline'}
                           size={24}
                           color={'#000'}
                        />) : (  <Icon
                           name={'ios-eye-off-outline'}
                           size={24}
                           color={'#000'}
                        />)}
                     </TouchableOpacity>
                  </View>
                  <View style={styles.inputForm}>
                     <Text style={{fontSize:setting.fontDefault}}>Nhập lại mật khẩu</Text>
                     <Controller control={control} rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                           <TextInput
                              style={styles.signUpInput}
                              onBlur={onBlur}
                              onChangeText={onChange}
                              value={value}
                              placeholder='Confirm Password'
                              secureTextEntry={showPass1}
                           />
                        )}
                        name="confirmPassword"
                        defaultValue=""
                     />
                     {errors.confirmPassword && <Text>This is required.</Text>}
                     <TouchableOpacity
                        style={styles.btnEye}
                        onPress={() => setShowPass1(!showPass1)}>
                           {showPass1 ? (  <Icon
                           name={'ios-eye-outline'}
                           size={24}
                           color={'#000'}
                        />) : (  <Icon
                           name={'ios-eye-off-outline'}
                           size={24}
                           color={'#000'}
                        />)}
                     </TouchableOpacity>
                  </View>
                  <View>
                     <TouchableOpacity 
                        style={styles.signUpBtn} 
                        onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.signUpBtnTitle}>Đăng ký</Text>
                     </TouchableOpacity>
                     <View style={styles.haveAccount}>
                        <Text style={styles.haveAcountTitle}>Bạn đã có tài khoản? </Text>
                        <TouchableOpacity>
                           <Text 
                              style={styles.haveAcountTitleBlue} 
                              onPress={()=> navigation.navigate('Login')}> 
                              Đăng nhập 
                           </Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>
            </ScrollView>
         </View>
      </KeyboardAvoidingView>
   )
}

export default SignUp;
