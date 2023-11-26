import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TopBar from '../navigation/TopBar';

const ExamQuestions = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          backgroundColor: '#479bc1c9',
          width: '100%',
          height: 130,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          padding: 15,
          marginBottom: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            //             backgroundColor: '#0f0',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 70,
            padding: 20,
          }}>
          <View
            style={{
              width: 40,
            }}>
            <TouchableOpacity>
              <FastImage
                tintColor={'#fff'}
                source={require('../arrow1.png')}
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 10,
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#ffff',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Exam Questions
            </Text>
          </View>

          <View
            style={{
              width: 40,
            }}></View>
        </View>
      </View>
      <TopBar />
    </View>
  );
};
export default ExamQuestions;
