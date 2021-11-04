import React, {useState} from 'react';
import {
   View,
   Text,
   TextInput,
   TouchableOpacity,
   KeyboardAvoidingView,
   ScrollView,
   Alert,
} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { styles } from '../../assets/css/profile/_changePassword';
import Icon from 'react-native-vector-icons/Ionicons'
import { setting } from '../../assets/css/setting';
import Header from '../header/header';

const ChangePassword = ({navigation}) => {
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
            <Header onPress={() => navigation.goBack()} title='Đổi mật khẩu' />
            <ScrollView style={{flex:1}}>
               <View style={styles.loginForm}>
                  <View style={styles.inputForm}>
                     <Text style={{fontSize:setting.fontDefault}}>Mật khẩu cũ</Text>
                     <Controller control={control} rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                           <TextInput
                              style={styles.textInput}
                              onBlur={onBlur}
                              onChangeText={onChange}
                              value={value}
                              placeholder='Nhập vào mật khẩu cũ'
                           />
                        )}
                        name="oldPass"
                        defaultValue=""
                     />
                     {errors.oldPass && <Text>This is required.</Text>}
                  </View>
                  <View style={styles.inputForm}>
                     <Text style={{fontSize:setting.fontDefault}}>Mật khẩu mới</Text>
                     <Controller control={control} rules={{ required: true}}
                        render={({ field: { onChange, onBlur, value } }) => (
                           <TextInput
                              label="password"
                              mode="outlined"
                              style={styles.textInput}
                              onBlur={onBlur}
                              onChangeText={onChange}
                              value={value}
                              placeholder='Nhập vào mật khẩu mới'
                              secureTextEntry={showPass}
                           />
                        )}
                        name="newPass"
                        defaultValue=""
                     />
                     {errors.newPass && <Text>This is required.</Text>}
                     <TouchableOpacity
                        style={styles.btnEye}
                        onPress={() => setShowPass(!showPass)}>
                           {
                              showPass ? (  <Icon name={'ios-eye-outline'} size={24} color={'#000'}/> ) 
                              : 
                              ( <Icon name={'ios-eye-off-outline'} size={24} color={'#000'}/>)
                           }
                     </TouchableOpacity>
                  </View>
                  <View style={styles.inputForm}>
                     <Text style={{fontSize:setting.fontDefault}}>Xác nhận mật khẩu mới</Text>
                     <Controller control={control} rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                           <TextInput
                              label="password"
                              mode="outlined"
                              style={styles.textInput}
                              onBlur={onBlur}
                              onChangeText={onChange}
                              value={value}
                              placeholder='Xác nhận lại mật khẩu'
                              secureTextEntry={showPass1}
                           />
                        )}
                        name="confirmNewPass"
                        defaultValue=""
                     />
                     {errors.confirmNewPass && <Text>This is required.</Text>}
                     
                     <TouchableOpacity
                        style={styles.btnEye}
                        onPress={() => setShowPass1(!showPass1)}>
                           {
                              showPass1 ? (  <Icon name={'ios-eye-outline'} size={24} color={'#000'}/>) 
                              :
                              ( <Icon name={'ios-eye-off-outline'} size={24} color={'#000'} />)
                           }
                     </TouchableOpacity>
                  </View>
                  <View>
                     <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginBtnTitle} onPress={handleSubmit(onSubmit)}>Cật nhật</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </ScrollView>
         </View>
      </KeyboardAvoidingView>
   )
}

export default ChangePassword;
