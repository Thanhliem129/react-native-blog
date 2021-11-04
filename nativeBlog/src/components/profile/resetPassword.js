import React, {useState} from 'react';
import {
   View,
   Text, 
   TouchableOpacity,
   TextInput,
   KeyboardAvoidingView,
   ScrollView,
   Alert
} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { styles } from '../../assets/css/profile/_resetPassword';
import { setting } from '../../assets/css/setting';
import Header from '../header/header';

const ResetPassword = ({navigation}) => {
   const { control, handleSubmit, formState: { errors } } = useForm();

   const onSubmit = (data) => {
      console.log(data);
     
   }
   return(
      <KeyboardAvoidingView style={{flex:1}}>
         <View style={styles.container}>
            <Header onPress={() => navigation.goBack()} title='Quên mật khẩu' />
            <ScrollView>
               <View style={styles.resetTop}>
                  <Text style={styles.resetSubTitle}>
                     Chúng tôi sẽ gửi cho bạn đường linh qua email để thay đổi
                  </Text>
               </View>
               <View style={styles.resetForm}>
                  <View style={styles.inputForm}>
                     <Text style={{fontSize:setting.fontDefault}}>Email/ Số điện thoại</Text>
                     <Controller control={control} rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                           <TextInput
                              style={styles.resetInput}
                              onBlur={onBlur}
                              onChangeText={onChange}
                              value={value}
                              placeholder='Nhập vào Email/ Sdt'
                           />
                        )}
                        name="oldPass"
                        defaultValue=""
                     />
                     {errors.oldPass && <Text>This is required.</Text>}
                  </View>
                  <View>
                     <TouchableOpacity 
                        style={styles.resetBtn} 
                        onPress={() => {handleSubmit(onSubmit), navigation.navigate('VerificationCode')}}>
                        <Text style={styles.resetBtnTitle}>Gửi mail</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </ScrollView>
         </View>
      </KeyboardAvoidingView>
   )
}
export default ResetPassword;