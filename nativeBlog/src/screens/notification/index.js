import React, {useState, useRef} from 'react';
import { 
  View, 
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
 } from 'react-native';
import Header from '../../components/header/header';
import { styles } from '../../assets/css/notification/_notification';
import Icon from 'react-native-vector-icons/Ionicons'
import { dataNotification } from '../../utilities/datavirtual';
import { SwipeListView } from 'react-native-swipe-list-view';
import { height, moderateScale, width } from '../../utilities/size';

const Notification = ({navigation}) => {
  const [listData, setListData] = useState(
    dataNotification.map((item, index) => ({
      key:`${index}`,
      title:item.title,
      desc:item.desc,
      date:item.date
    }))
  )
  const closeRow = (rowMap, rowKey) => {
    if(rowMap[rowKey]){
      rowMap[rowKey].closeRow();
    }
  }
  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex( item => item.key === rowKey)
    newData.splice(prevIndex, 1);
    setListData(newData)
  }

  const renderItem = (data, rowMap) =>{
    return(
      <View style={styles.rowFront} >
        <View  style={styles.rowFrontVisible}>
          <View style={{flexDirection:'row', alignItems:'center', width:width}}>
            <View style={styles.iconLeft}>
              <Icon name='ios-gift-outline' size={moderateScale(24)} color='#048ad1'/>
            </View>
            <View style={styles.notContent}> 
              <TouchableOpacity>
                <Text style={styles.title} numberOfLines={1}>{data.item.title}</Text>
              </TouchableOpacity>
              <Text style={styles.details} numberOfLines={2}>{data.item.desc}</Text>
              <Text style={styles.date}>{data.item.date}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
  const renderHiddenItem = (data, rowMap) =>{
    return(
      <View style={styles.rowBack}>
        <TouchableOpacity 
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => closeRow(rowMap, data.item.key)} >
            <Icon name='ios-close-circle-outline' color='#fff' size={28} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() =>deleteRow(rowMap, data.item.key)}>
            <Icon name='trash-outline' color='#fff' size={28} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title='Thông báo' />
      <ScrollView>
        <View style={styles.notTop}>
          <Text style={styles.checkAllText}>Đánh dấu tất cả là đã đọc</Text>
        </View>
        {
          listData.length != 0 ?
          <SwipeListView
            data={listData}
            renderItem={renderItem}
            keyExtractor={item => item.key}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={moderateScale(75)}
            rightOpenValue={moderateScale(-150)}
            disableRightSwipe
          />
          :
          <View style={{
            alignItems:'center',
            justifyContent:'center',
            height:height - moderateScale(150)
          }}>
            <Text style={{
              color:'#048ad1',
              fontStyle:'italic'
            }}>Bạn không có thông báo nào</Text>
          </View>
        }
      </ScrollView>
    </View>
  )
};

export default Notification;