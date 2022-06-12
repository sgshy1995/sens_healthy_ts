import React, {useContext} from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Linking, Image, Dimensions } from "react-native";

const PainQA = () => {
  const [list, setList] = React.useState([
    {
      id: 1,
      name: '张志东',
      type: '肩周炎',
      avatar: 'https://c-ssl.duitang.com/uploads/blog/202203/07/20220307084824_51277.jpeg',
      back: 'https://www.lemonlv.com/d/file/20170113/5c7353c560c7f6ca307aac8ac8dc30b6.jpg',
      created_time: '2022-05-16 17:24:00',
      description: '病情描述，什么时候发生什么问题，做过什么检查、治疗、现在情况怎么样，想知道科学有效的干预方式...',
      comments: 3,
      payment: 18
    },
    {
      id: 2,
      name: '刘强',
      type: '肩周炎',
      avatar: 'https://c-ssl.dtstatic.com/uploads/blog/202203/04/20220304195641_9cfb0.thumb.1000_0.jpg',
      back: 'https://www.lemonlv.com/d/file/20170113/7b5ec0fa91284266a2546f3aef2627de.jpg',
      created_time: '2022-05-16 17:24:00',
      description: '病情描述，什么时候发生什么问题，做过什么检查、治疗、现在情况怎么样，想知道科学有效的干预方式...',
      comments: 2,
      payment: 24
    },
    {
      id: 3,
      name: '谢文东',
      type: '肩周炎',
      avatar: 'https://c-ssl.dtstatic.com/uploads/blog/202203/19/20220319205139_b509f.thumb.1000_0.jpg',
      back: 'https://www.lemonlv.com/d/file/20170113/2d787f64d8750408699f3a3e58d73ae3.jpg',
      created_time: '2022-05-16 17:24:00',
      description: '病情描述，什么时候发生什么问题，做过什么检查、治疗、现在情况怎么样，想知道科学有效的干预方式...',
      comments: 6,
      payment: 18
    }
  ]);
  return (
    <>
      <View style={styles.containerStyle}>
        {list.map((i,index)=>{
          return (
            <View style={{...styles.itemStyle, ...index === 0 ? styles.itemFirstStyle : {}}} key={i.id}>
              <Text style={{height: 24, lineHeight: 24, color: '#4F68B0', fontSize: 16, fontWeight: '500', marginBottom: 14}}>问题描述 ({i.type})</Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Image source={{uri: i.avatar}} style={{width: 50, height: 50}}></Image>
                <View style={{height: 50, display: 'flex', justifyContent: 'space-between', padding: 4}}>
                  <Text style={{paddingLeft: 6}}>{i.name}</Text>
                  <Text style={{paddingLeft: 6}}>{i.created_time}</Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'row', marginTop: 14}}>
                <Text style={{flexGrow: 1, flexShrink: 1}}>{i.description}</Text>
                <Image source={{uri: i.back}} style={{width: 120, height: 80, marginLeft: 10}}></Image>
              </View>
              <View style={{display: 'flex', flexDirection: 'row', marginTop: 14}}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: 20}}>
                  <Image style={{ width: 16, height: 16, marginRight: 4 }}
                         source={require("../../assets/images/home/comment.png")}></Image>
                  <Text>{i.comments}条评论</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <Image style={{ width: 16, height: 16, marginRight: 4 }}
                         source={require("../../assets/images/home/payment.png")}></Image>
                  <Text>{i.comments}咨询费</Text>
                </View>
              </View>
            </View>
          )
        })}
      </View>
    </>
  )
}

export default PainQA;

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    padding: 14,
    minHeight: Dimensions.get("screen").height - 220,
    backgroundColor: '#fff',
    marginBottom: 14
  },
  itemStyle: {
    marginTop: 14,
    borderWidth: 1,
    borderColor: 'rgba(51,51,51,0.2)',
    borderRadius: 10,
    padding: 14
  },
  itemFirstStyle: {
    marginTop: 0
  }
})
