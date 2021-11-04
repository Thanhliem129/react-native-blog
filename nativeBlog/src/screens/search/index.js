import React, { useState } from 'react';
import {
  View, 
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from 'react-native'
import { styles } from '../../assets/css/searchPage/_index';
import { moderateScale } from '../../utilities/size';
import Icon from 'react-native-vector-icons/Ionicons'

const Search = ({navigation}) => {

  const [search, setSearch] = useState('')
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.backgroundColor,{marginTop:Platform.OS === 'ios' ? moderateScale(15): moderateScale(0)}]}>
        <View style={styles.flex}>
          <View style={{width:'90%', position:'relative'}}>
            <TouchableOpacity style={styles.searchIconBtn}>
              <Icon name='search' size={22} style={styles.searchIcon}  />
            </TouchableOpacity>
            <TextInput 
              style={styles.searchInput} 
              placeholder='Nhập mã hàng'
              value={search}
              onChangeText={text => setSearch(text)}
              autoComplete='name'
            />
            <View style={styles.searchGroupIcon}>
              <TouchableOpacity>
                <Icon name='mic-outline' size={22} color='#444' />
              </TouchableOpacity>
              <Text > |  </Text>
              <TouchableOpacity>
                <Icon name='ios-qr-code-outline' size={22} color='#444' />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={{marginLeft:10}}>
            <Icon name='cart-outline' style={{color:'white'}} size={moderateScale(30)} />
          </TouchableOpacity>
        </View>
      </View>
      
    </SafeAreaView>
  )
};

export default Search;

