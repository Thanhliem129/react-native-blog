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
import { styles } from '../../assets/css/profile/_login';
import { moderateScale } from '../../utilities/size';
import Facebook from '../../assets/images/icon/facebook.png'
import Google from '../../assets/images/icon/google.png';
import Icon from 'react-native-vector-icons/Ionicons'
import { setting } from '../../assets/css/setting';
import Header from '../header/header';

const Login = ({navigation}) => {
   const { control, handleSubmit, formState: { errors } } = useForm();

   const [showPass, setShowPass] = useState(true);
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const onSubmit = (data) => {
      Alert.alert('Thông tin đã được gửi đi')
      console.log(data);
   }
   return(
      <KeyboardAvoidingView style={{flex:1}}>
         <View style={styles.container}>
            <Header onPress={() => navigation.goBack()} title='Đăng nhập' />
            <ScrollView>
               <View style={styles.loginTop}>
                  <Image
                     style={styles.imageLogo}
                     source={Logo} />
                  <Text style={styles.loginSubTitle}>
                     Always Ready To Be Different
                  </Text>
               </View>
               <View style={styles.loginForm}>
                  <View style={styles.inputForm}>
                     <Text style={{fontSize:setting.fontDefault}}>Email/ Số điện thoại</Text>
                     <Controller control={control} rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                           <TextInput
                              style={styles.loginInput}
                              onBlur={onBlur}
                              onChangeText={onChange}
                              value={value}
                           />
                        )}
                        name="username"
                        defaultValue=""
                     />
                     {errors.username && <Text>This is required.</Text>}
                  </View>
                  <View style={styles.inputForm}>
                     <Text style={{fontSize:setting.fontDefault}}>Mật khẩu</Text>
                     <Controller control={control} rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                           <TextInput
                              style={styles.loginInput}
                              onBlur={onBlur}
                              onChangeText={onChange}
                              value={value}
                              secureTextEntry={showPass}
                              placeholder={'Password'}
                           />
                        )}
                        name="password"
                        defaultValue=""
                     />
                     {errors.password && <Text>This is required.</Text>}
                     {/* <TextInput
                     label="password"
                     mode="outlined"
                     value={password}
                     style={styles.loginInput}
                     onChangeText={text => setPassword(text)}
                     placeholder={'Password'}
                     placeholderTextColor={'#ccc'}
                     underlineColorAndroid="transparent"
                     secureTextEntry={showPass}
                     /> */}
                     <TouchableOpacity
                        style={styles.btnEye}
                        onPress={() => setShowPass(!showPass)}>
                           {showPass ? (  <Icon name={'ios-eye-outline'} size={24} color={'#000'} />) 
                           : 
                        (  <Icon name={'ios-eye-off-outline'} size={24} color={'#000'}/>)}
                     </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                     <Text style={styles.losePassword}>Quên mật khẩu</Text>
                  </TouchableOpacity>
                  <View>
                     <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.loginBtnTitle}>Đăng nhập</Text>
                     </TouchableOpacity>
                  </View>
                  <View style={{flexDirection:'row', justifyContent:'center', marginVertical:moderateScale(20)}}>
                     <Text>-OR-</Text>
                  </View>
                  <View style={styles.loginMethod}>
                     <TouchableOpacity style={styles.loginMethodBtn}>
                        <Image source={Facebook} style={styles.imageIcon}/>
                        <Text style={styles.loginMethodTitle}>Facebook</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.loginMethodBtn}>
                        <Image source={Google} style={styles.imageIcon}/>
                        <Text style={styles.loginMethodTitle}>Google</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </ScrollView>
         </View>
      </KeyboardAvoidingView>
   )
}

export default Login;
