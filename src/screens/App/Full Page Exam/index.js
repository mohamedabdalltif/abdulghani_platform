import * as React from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
  Modal,
  BackHandler,
  Dimensions,
  Animated,
  NativeModules,
} from 'react-native';
import {
  Container,
  Spinner,
  // Icon
} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as Animatable from 'react-native-animatable';
import ImageZoom from 'react-native-image-pan-zoom';

import ProgressCircle from 'rn-animated-progress-circle';
// import Counter from 'react-native-animated-counter';
import LinearGradient from 'react-native-linear-gradient';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import { languageObj } from "../../../../MainLanguage";
import { AppRequired, COLORS, FONTS, images , SIZES } from '../../../../constants';
// import { jsxAttribute } from '@babel/types';

const { width, height } = Dimensions.get('window');

const HEADER_HEIGHT = 90;

export default class FullPageExam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'not_done',
      scrollY: new Animated.Value(0),
      fullDegree: '',
      studenDegree: '',
      visibleModal: false,
      image_modal: false,
      image_modal_src: '',
      percent: '',
      quizId: 1,
      // this.props.navigation.route.params('quiz_id'),
      quiz_name: "test",
      // this.props.navigation.route.params('quiz_name'),
      loading: true,
      buttonLoading: false,
      student_id: '133',
      index: 1,
      oldIndex: 0,
      bottomConnectionMsg: new Animated.Value(-100),
      connection_Status: 'Online',
      questions:  [
          {
            "question_id": "1",
            "question_text": "jdfj",
            "question_image": null,
            "question_answers": "fkngl//CAMP//jdskfj",
            "question_valid_answer": "fkngl",
            "question_exam_quiz_id": "Exam_15",
            "real_answers": [
              "fkngl",
              "jdskfj"
            ],
            "real_answers2": [
              {
                "text": "fkngl",
                "color": "#0f0"
              },
              {
                "text": "jdskfj",
                "color": "#fff"
              }
            ],
            "chosen_answer": ""
          },
          {
            "question_id": "3",
            "question_text": "ففز",
            "question_image": null,
            "question_answers": "النقعق//CAMP//بَعبهفهف٧",
            "question_valid_answer": "النقعق",
            "question_exam_quiz_id": "Exam_15",
            "real_answers": [
              "النقعق",
              "بَعبهفهف٧"
            ],
            "real_answers2": [
              {
                "text": "النقعق",
                "color": "#0f0"
              },
              {
                "text": "بَعبهفهف٧",
                "color": "#fff"
              }
            ],
            "chosen_answer": ""
          },
          {
            "question_id": "4",
            "question_text": "ذفذف",
            "question_image": null,
            "question_answers": "٧ل٦//CAMP//ع٨ه٨ع٧",
            "question_valid_answer": "٧ل٦",
            "question_exam_quiz_id": "Exam_15",
            "real_answers": [
              "٧ل٦",
              "ع٨ه٨ع٧"
            ],
            "real_answers2": [
              {
                "text": "٧ل٦",
                "color": "#0f0"
              },
              {
                "text": "ع٨ه٨ع٧",
                "color": "#fff"
              }
            ],
            "chosen_answer": ""
          }
        ],
      
      EndScroll: 1,
      arr: [],
      LogoutModal: false,
      failedgetDegreeOfExamModal: false,
    };
    // this._subscription;
    this.scrollToIndex = this.scrollToIndex.bind(this);

    this._rowRenderer = this._rowRenderer.bind(this);
  }
  componentWillUnmount() {
    // this.backHandler.remove();
  }

  async componentDidMount() {
    // const data = JSON.parse(await AsyncStorage.getItem('AllData'));
    // if (data != null) {
      this.setState({
        student_id: 2
        // data.student_id,
      });
      this.selectQuestions();
    // }

    const unsubscribe = NetInfo.addEventListener(async (state) => {
      if (state.isConnected == true) {
        this.setState({
          connection_Status: 'Online',
        });
      } else {
        this.setState({
          connection_Status: 'Offline',
        });
      }
    });

    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }
  scrollToIndexFailed(error) {
    const offset = error.averageItemLength * error.index;
    this.flatListRef.scrollToOffset({ offset });
    setTimeout(() => {
      this.flatListRef.scrollToIndex({ index: error.index });
    }, 2500);
  }


  backAction = () => {
    if (this.state.visibleModal == true) {
      BackHandler.exitApp();
    } else {
      this.setState({ LogoutModal: true });

      return true;
    }
  };
  praviousFunction() {
    this.setState({
      index: this.state.index - 1,
      oldIndex: this.state.oldIndex - 1,
    });
    this.scrollToIndex();
  }
  NextFunction() {
    this.setState({
      index: this.state.index + 1,
      oldIndex: this.state.oldIndex + 1,
    });
    this.scrollToIndex();
  }
  selectQuestions() {
    // let data_to_send = { id: this.state.quizId };
    // axios
    //   .post(AppRequired.Domain + 'select_questions.php', data_to_send)
    //   .then((res) => {
    //     // console.log(res.data)
    //     if (res.data) {
    //       if (res.data == 'error') {
    //         Alert.alert(
    //           AppRequired.appName + '',
    //           languageObj.examRetrieveError,
    //         );
    //       } else {
      let res=this.state.questions
            var m = this.state.questions.length / 10;
            // res.data.questions.length / 10;
            m = Math.ceil(m);
            var arr = [];
            // console.log('=================' + m);
            for (var i = 1; i <= m; i++) {
              arr.push(i + '');
            }
            this.setState({ arr: arr });
            this.setState({ questions: res });
          // }
        // }
        this.setState({ loading: false });
      // });
  }

  renderModal() {
    return (
      <Modal
        animationType="slide"
        // transparent={true}
        visible={this.state.visibleModal}>
        <ScrollView style={{ marginBottom: 0 }}>
          <View style={{ height: 40 }} />
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              justifyContent: 'center',
              padding: 20,
              // alignItems: 'center',
            }}>
            <View style={{ alignItems: 'flex-start' }}>
              {this.state.percent == '' ? (
                <Animated.Text
                  style={{
                    fontSize: 12,
                    fontWeight: '900',
                    fontFamily: 'Menlo',
                    // marginBottom: 8,
                    textAlign: 'right',

                    transform: [
                      {
                        translateX:
                          (this.state.studenDegree / this.state.fullDegree) *
                          (width * 0.85),
                      },
                    ],
                  }}>
                  0%
                </Animated.Text>
              ) : (
                <Animated.Text
                  style={{
                    fontSize: 12,
                    fontWeight: '900',
                    fontFamily: 'Menlo',
                    // marginBottom: 8,
                    textAlign: 'right',

                    transform: [
                      {
                        translateX:
                          (this.state.studenDegree / this.state.fullDegree) *
                          (width * 0.85),
                      },
                    ],
                  }}>
                  {parseInt(this.state.percent)}%
                </Animated.Text>
              )} 
            </View>
            <View
              style={{
                flexDirection: 'row',
                height: 40,
                position: 'absolute',
                top: 40,
                alignSelf: 'center',
                width: width * 0.9,
              }}>
              <View
                style={{ backgroundColor: '#D2DFE0', height: 40, width: '50%' }}
              />
              <View
                style={{ backgroundColor: '#FCD98D', height: 40, width: '15%' }}
              />
              <View
                style={{ backgroundColor: '#E6F1CD', height: 40, width: '10%' }}
              />
              <View
                style={{ backgroundColor: '#B5DCC9', height: 40, width: '10%' }}
              />

              <View
                style={{ backgroundColor: '#99B7DF', height: 40, width: '15%' }}
              />
            </View>

            <View style={{ alignItems: 'flex-start' }}>
              <Animated.Image
                source={images.arrow}
                style={{
                  width: 15,
                  height: 15,
                  // width: '100%',
                  // height: 200,
                  // alignSelf: 'center',

                  // marginLeft: 10,
                  // marginBottom:-10,
                  transform: [
                    {
                      translateX:
                        -(this.state.studenDegree / this.state.fullDegree) *
                        (width * 0.85),
                    },
                  ],
                }}
              />
              <Animated.View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 20,
                  backgroundColor: 'transparent',
                  marginTop: 2,
                  marginLeft: 5,
                  transform: [
                    {
                      translateX:
                        -(this.state.studenDegree / this.state.fullDegree) *
                        (width * 0.85),
                    },
                  ],
                }}
              />

              <Animated.Image
                source={images.arrowUp}
                style={{
                  width: 15,
                  height: 15,

                  marginTop: 3,

                  transform: [
                    {
                      translateX:
                        -(this.state.studenDegree / this.state.fullDegree) *
                        (width * 0.85),
                    },
                  ],
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '900',
                fontFamily: FONTS.fontFamily,
                marginTop: 4,
                // textAlign:'right'
              }}>
              100% 
            </Text>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 20,
              }}>
              {this.state.percent >= 0 && this.state.percent < 50 ? (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 80,
                    height: 80,
                    backgroundColor: '#',

                    marginTop: 20,
                  }}>
                  <Image
                    source={images.sad}
                    style={{
                      width: 80,
                      height: 80,
                    }}
                  />
                </View>
              ) : this.state.percent >= 50 && this.state.percent < 75 ? (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 80,
                    height: 80,

                    marginTop: 20,
                  }}>
                  <Image
                    source={images.happy2}
                    style={{
                      // flex: 1,
                      width: 80,
                      height: 80,
                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',

                    marginTop: 20,
                  }}>
                  <Image
                    source={images.happy}
                    style={{
                      width: 80,
                      height: 80,
                    }}
                  />
                </View>
              )}
            </View>
            <View
              style={{
                // transform: [{rotateY: '180deg', rotate: '180deg'}],
                marginTop: 20,
              }}>
              <ProgressCircle
                style={{ alignSelf: 'center' }}
                value={this.state.percent / 100}
                size={120}
                thickness={6}
                color={
                  this.state.percent > 0 && this.state.percent < 50
                    ? 'red'
                    : this.state.percent >= 50 && this.state.percent < 75
                      ? '#f2dc1a'
                      : '#5cb85c'
                }
                unfilledColor="#293077"
                animationMethod="timing"
                shouldAnimateFirstValue={true}
                animationConfig={{ duration: 2000, dely: 500 }}>
                <View
                  style={{
                    marginTop: 20,
                    alignItems: 'center',

                    // transform: [{rotateY: '180deg', rotate: '180deg'}],
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: -35,
                    }}>
                    <Text
                      style={{
                        color: COLORS.primary,
                        fontSize: 25,
                        fontWeight: 'bold',
                        fontFamily: FONTS.fontFamily,
                      }}>
                      {parseInt(this.state.percent)+" "}%
                    </Text>
                    {/* <Counter
                      start={0}
                      end={parseInt(this.state.percent)}
                      style={{
                        color: COLORS.primary,
                        fontSize: 25,
                        fontWeight: 'bold',
                        fontFamily: FONTS.fontFamily,
                      }}
                      duration={2000}
                    /> */}
                  </View>

                  <Text
                    style={{
                      // textAlign: 'center',
                      fontFamily: FONTS.fontFamily,
                      color: COLORS.primary,
                      marginVertical: 5,
                    }}>
                    {this.state.studenDegree}
                    {''} /{''} {this.state.fullDegree}
                  </Text>
                </View>
              </ProgressCircle>
            </View>

            <TouchableOpacity
              style={{
                marginTop: 60,
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                // height: 50,
                backgroundColor: COLORS.primary,
                alignSelf: 'center',
                borderRadius: 50,
                marginBottom: 20,
              }}
              onPress={() => {
                this.setState({ visibleModal: false, buttonLoading: false }),
                  this.props.navigation.goBack();
              }}>
              <LinearGradient
                colors={[COLORS.primary, COLORS.primary, COLORS.primary]}
                style={{
                  // marginTop: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: 50,
                  // backgroundColor: Constants.color,
                  alignSelf: 'center',
                  borderRadius: 50,
                  // marginBottom: 30,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 25,
                    color: '#FFF',
                    fontFamily: FONTS.fontFamily,
                  }}>
                  {languageObj.close}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>
    );
  }
  scrollToIndex = () => {
    var randomIndex = this.state.index * 10 - 10;

    this.flatListRef.scrollToIndex({ index: randomIndex });

  };

  _rowRenderer(data, index) {
    if (index >= this.state.oldIndex * 10 && index < this.state.index * 10) {
      return (
        <View>
          <Animatable.View
            style={{
              backgroundColor: '#f7f7f7',
              elevation: 4,
              borderRadius: 10,
              width: '90%',
              alignSelf: 'center',
              padding: 10,
              marginTop: 10,
              marginBottom: 20,


            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',

                alignSelf: 'flex-start',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#293077',
                  fontWeight: 'bold',
                  fontFamily: FONTS.fontFamily,
                }}>
                {index + 1}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: '#293077',
                  fontWeight: 'bold',
                  fontFamily: FONTS.fontFamily,
                }}>
                ︼
              </Text>
            </View>


            <Text
              style={{
                fontSize: 18,
                color: '#293077',
                fontWeight: 'bold',
                fontFamily: FONTS.fontFamily,
              }}>
              {"test"}
            </Text>

            {data.question_image == null ? null : (
              <>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    this.setState({
                      image_modal: true,
                      image_modal_src: data.question_image,
                    });
                  }}
                  style={{ flex: 1, width: '100%', height: 200, marginTop: 30 }}>
                  <Image
                    source={{ uri: data.question_image }}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      // width: '100%',
                      // height: 200,
                      // alignSelf: 'center',
                      // marginTop: 10,
                      marginBottom: 30,
                      resizeMode: 'contain',
                    }}
                  />
                </TouchableOpacity>
              </>
            )}










            {data.real_answers.map((item) => {
              return (
                <TouchableOpacity
                  // animation="fadeInRight"
                  disabled={this.state.buttonLoading}
                  onPress={() => {
                    if (
                      this.state.questions[this.state.questions.indexOf(data)]
                        .chosen_answer != '' &&
                      this.state.questions[this.state.questions.indexOf(data)]
                        .chosen_answer == item
                    ) {
                      let newArray = this.state.questions;
                      newArray[newArray.indexOf(data)].chosen_answer = '';
                      this.setState({ questions: newArray });
                    } else {
                      let array =
                        this.state.questions[this.state.questions.indexOf(data)]
                          .real_answers;
                      this.chooseTheAnswer(
                        this.state.questions.indexOf(data),
                        array.indexOf(item),
                      );
                    }
                  }}
                  style={{
                    backgroundColor: '#fff',
                    elevation: 1,
                    width: '90%',
                    alignSelf: 'center',
                    // height: 50,
                    marginTop: 20,
                    padding: 14,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 20,
                    flex: 1,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {item != data.chosen_answer ? (
                      <View
                        style={{
                          borderColor: COLORS.primary,
                          // borderWidth: 1,
                          marginRight: 10,
                          height: 30,
                          width: 30,
                          borderRadius: 20,
                          backgroundColor: '#DDD',
                        }}></View>
                    ) : (
                      <View
                        style={{
                          height: 30,
                          width: 30,
                          borderRadius: 20,
                          backgroundColor: '#5cb85c',
                          marginRight: 10,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <MaterialIcons
                          name="check"
                          style={{ fontSize: 26, color: '#FFF' }}
                        />
                      </View>
                    )}
                  </View>
                  <View
                    style={{
                      flex: 4,
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        textAlign: 'left',
                        fontFamily: FONTS.fontFamily,
                      }}>
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}

          </Animatable.View>



          {index + 1 == this.state.questions.length &&
            this.state.status == 'not_done' ? (
            <TouchableOpacity
              disabled={this.state.buttonLoading}
              style={{

                alignItems: 'center',
                justifyContent: 'center',
                width: '88%',
                height: 50,
                backgroundColor: COLORS.primary,
                alignSelf: 'center',
                borderRadius: 10,
                marginBottom: 100,
              }}
              onPress={() => this.getDegreeOfExam()}>
              {this.state.buttonLoading == true ? (<></>
                // <Spinner color="#fff" size={30} style={{ marginTop: 5 }} />
              ) : (
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 25,
                    color: '#FFF',
                    fontFamily: FONTS.fontFamily,
                  }}>
                  {languageObj.end}

                </Text>
              )}
            </TouchableOpacity>
          ) : null}
        </View>
      );
    }
  }

  chooseTheAnswer(opjectIndex, answerIndex) {
    let newArray = this.state.questions;
    newArray[opjectIndex].chosen_answer =
      newArray[opjectIndex].real_answers[answerIndex];
    this.setState({ questions: newArray });
  }
  getDegreeOfExam() {
    if (this.state.connection_Status == 'Online') {
      let validate = 0;
      let newArray = this.state.questions;
      let length = newArray.length;
      let fullMark = newArray.length;

      for (var i = 0; i < length; i++) {
        if (newArray[i].chosen_answer != '') {
          validate++;
        }
      }

      let studenDegree = 0;
      let AllQuestionString = '';
      for (let i = 0; i < length; i++) {
        if (newArray[i].chosen_answer == newArray[i].question_valid_answer) {
          studenDegree++;
          if (i == newArray.length - 1) {
            AllQuestionString +=
              newArray[i].question_id +
              '***' +
              '1' +
              '***' +
              newArray[i].chosen_answer;
          } else {
            AllQuestionString +=
              newArray[i].question_id +
              '***' +
              '1' +
              '***' +
              newArray[i].chosen_answer +
              '***camp_coding***';
          }
        } else {
          if (i == newArray.length - 1) {
            AllQuestionString +=
              newArray[i].question_id +
              '***' +
              '0' +
              '***' +
              newArray[i].chosen_answer;
          } else {
            AllQuestionString +=
              newArray[i].question_id +
              '***' +
              '0' +
              '***' +
              newArray[i].chosen_answer +
              '***camp_coding***';
          }
        }
      }
      // alert(AllQuestionString)

      // let data_to_send = {
      //   id: this.state.quizId,
      //   student_id: this.state.student_id,
      //   score: studenDegree + '/' + fullMark,
      //   all_question: AllQuestionString,
      // };

      // this.setState({ buttonLoading: true });
      if (this.state.connection_Status == 'Online') {
        // axios
        //   .post(AppRequired.Domain + 'upload_score.php', data_to_send)
        //   .then((res) => {
        //     this.setState({ buttonLoading: false });

        //     if (res.data) {
        //       // console.log(res.data);
        //       if (res.data == 'success') {
                let precent = (studenDegree / fullMark) * 100;
                console.log(precent)
                this.setState({
                  visibleModal: true,
                  percent: precent,
                  status: 'done',
                  
                });
          //     } else {
          //       Alert.alert(
          //         AppRequired.appName + '',
          //         languageObj.examRetrieveError,
          //       );
          //     }
          //   }
          // });
      } else {
        this.setState({ buttonLoading: false });
        Alert.alert(
          AppRequired.appName + '',
          languageObj.internetConnection,
          [
            {
              text: '',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: languageObj.OK, onPress: () => console.log('OK Pressed') },
          ],
        );
      }

      this.setState({ fullDegree: fullMark, studenDegree: studenDegree });
    } else {
      this.setState({ failedgetDegreeOfExamModal: true });
    }
  }
  renderHeader = () => {
    const diffClampScrollY = Animated.diffClamp(
      this.state.scrollY,
      0,
      HEADER_HEIGHT,
    );
    const translateY = diffClampScrollY.interpolate({
      inputRange: [0, HEADER_HEIGHT],
      outputRange: [0, -HEADER_HEIGHT],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
    return (
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: HEADER_HEIGHT,

          elevation: 22,
          zIndex: 1000,
          transform: [
            {
              translateY: translateY,
            },
          ],
        }}>
        <LinearGradient
          style={{
            flexDirection: 'row',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            alignItems: 'center',

            height: '100%',
            width: '100%',
          }}
          colors={[COLORS.primary, COLORS.third]}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ LogoutModal: true });
              }}>
              <Icon name="arrow-left" size={20} style={{ color: '#fff' }}></Icon>
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Text
              numberOfLines={1.5}
              style={{
                fontFamily: FONTS.fontFamily,
                color: '#fff',
                fontSize: 18,
              }}>
              {this.state.quiz_name}
            </Text>
          </View>
          <View style={{ flex: 1 }}></View>
        </LinearGradient>
      </Animated.View>
    );
  };
  render() {
    const { scrollY } = this.state;

    const ViewConnectionMsg = (props) => {
      return (
        <Animated.View
          style={[
            styles.ConnectionView,
            { bottom: this.state.bottomConnectionMsg },
          ]}>
          <View>
            <Text style={{ color: 'white' }}>{props.ConnectionEnter}</Text>
          </View>
        </Animated.View>
      );
    };
    return (
      <View style={{ backgroundColor: '#f8f8f8',flex:1 }}>
        {/* {alertheaderText(this.state.questions.length)} */}
        {this.renderHeader()}

        {/* <ScrollView> */}

        {this.state.loading == true &&
          this.state.connection_Status == 'Online' ? (
            <></>
          // <Spinner color={COLORS.primary} size={40} style={{ marginTop: 200 }} />
        ) : // </ScrollView>
          this.state.loading == false && this.state.status == 'not_done' ? (
            <View
              style={{
                width: SIZES.width,
                height: SIZES.height,
                paddingBottom: 50,
              }}>
              <ScrollView
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                  { useNativeDriver: false },
                )}>
                <FlatList
                  onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false },
                  )}
                  ref={(ref) => (this.flatListRef = ref)}
                  onScrollToIndexFailed={this.scrollToIndexFailed.bind(this)}
                  data={this.state.questions}
                  style={{ paddingTop: HEADER_HEIGHT }}
                  numColumns={1}
                  renderItem={({ item, index }) => this._rowRenderer(item, index)}
                  onEndReached={() => {
                    if (
                      this.state.index ==
                      Math.ceil(this.state.questions.length / 10) &&
                      this.state.EndScroll == 1
                    ) {
                      this.scrollToIndex();
                    }
                  }}
                  onScrollEndDrag={() => {
                    if (
                      this.state.index ==
                      Math.ceil(this.state.questions.length / 10)
                    ) {
                      this.setState({ EndScroll: 2 });
                    } else {
                      this.setState({ EndScroll: 1 });
                    }
                  }}
                />

              </ScrollView>
              {/* {this.MapRender()} */}



            </View>
          ) : this.state.connection_Status != 'offline' ? null : (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: height / 3,
              }}>
              <Image
                style={{ width: '70%', height: height / 4 }}
                source={images.NoInternet}
              />
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 18,
                  fontFamily: FONTS.fontFamily,
                }}>
                {languageObj.internetConnection}

              </Text>
            </View>
          )}
        {/* </ScrollView> */}

        <View style={styles.footer}>
          {this.state.oldIndex != 0 ? (
            <TouchableOpacity
              onPress={() => {
                this.praviousFunction();
              }}
              style={{
                height: 30,
                width: 30,
                borderRadius: 20,
                marginLeft: '3%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="arrow-left" size={20} style={{ color: '#fff' }}></Icon>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 30, marginLeft: '3%' }} />
          )}
          {this.state.questions.length / 10 >= 10 ? (
            <ScrollView
              style={{
                flexWrap: 'nowrap',
                flexDirection: 'row',
                paddingHorizontal: 20,
                width: '100%',
                //   backgroundColor: 'red',
              }}
              horizontal={true}>
              {this.state.arr.map((item) => (
                <TouchableOpacity
                  onPress={() => {
                    this.scrollToIndex(item),
                      this.setState({
                        index: this.state.arr.indexOf(item) + 1,
                        oldIndex: this.state.arr.indexOf(item),
                      });
                    // alert("hi")
                    // alert(this.state.arr.indexOf(item)+1)
                  }}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 50,
                    backgroundColor:
                      this.state.oldIndex == index ? COLORS.primary : '#FFF',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 5,
                    elevation: 1,
                  }}>
                  <Text
                    style={{
                      color: this.state.oldIndex == index ? '#fff' : '#000',
                      fontSize: 18,
                      fontFamily: FONTS.fontFamily,
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          ) : (
            <View style={{ flexDirection: 'row' }}>
              {this.state.arr.map((item, index) => (
                <TouchableOpacity
                  onPress={() => {
                    this.scrollToIndex(item),
                      this.setState({
                        index: this.state.arr.indexOf(item) + 1,
                        oldIndex: this.state.arr.indexOf(item),
                      });
                  }}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 50,
                    backgroundColor:
                      this.state.oldIndex == index ? '#fff' : COLORS.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 5,
                    borderWidth: 1,
                    borderColor: '#fff',

                    elevation: 1,
                  }}>
                  <Text
                    style={{
                      color: this.state.oldIndex == index ? '#000' : '#FFF',
                      fontSize: 18,
                      fontFamily: FONTS.fontFamily,
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          {this.state.oldIndex == this.state.arr.length - 1 ? (
            <View style={{ width: 30, marginRight: '3%' }} />
          ) : (
            <TouchableOpacity
              onPress={() => {
                this.NextFunction();
              }}
              style={{
                height: 30,
                width: 30,
                borderRadius: 20,
                marginRight: '3%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="arrow-right" size={20} style={{ color: '#fff' }}></Icon>
            </TouchableOpacity>
          )}
        </View>
        {this.renderModal()}
        <Modal
          visible={this.state.LogoutModal}
          onRequestClose={() => {
            this.setState({ LogoutModal: false });
          }}
          transparent={true}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View
              style={{
                width: '90%',
                padding: 10,
                backgroundColor: '#fff',
                elevation: 22,
                borderRadius: 15,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.fontFamily,
                    color: COLORS.primary,
                    fontSize: 22,
                  }}>
                  {AppRequired.appName}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: 'center',
                  width: '90%',
                  borderWidth: 1.5,
                  borderColor: '#ddd',
                }}
              />

              <View style={{ paddingHorizontal: 20, paddingVertical: 12 }}>
                <Text
                  style={{
                    fontFamily: FONTS.fontFamily,
                    color: COLORS.primary,
                    fontSize: 17,
                    textAlign: 'center',
                  }}>
                  {languageObj.exitExamAlert} ?
                </Text>
              </View>

              <View
                style={{
                  alignSelf: 'center',
                  width: '90%',
                  borderWidth: 1.5,
                  borderColor: '#ddd',
                }}
              />

              <View
                style={{
                  marginTop: 7,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRightWidth: 1,

                  }}
                  onPress={() => {
                    this.getDegreeOfExam();
                    this.setState({ LogoutModal: false });
                  }}>
                  <Text
                    style={{
                      fontFamily: FONTS.fontFamily,
                      color: COLORS.primary,
                      fontSize: 20,
                    }}>
                    {languageObj.OK}

                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderLeftWidth: 1,
                    borderLeftColor: '#ddd',

                  }}
                  onPress={() => {
                    this.setState({ LogoutModal: false });
                  }}>
                  <Text
                    style={{
                      fontFamily: FONTS.fontFamily,
                      color: COLORS.primary,
                      fontSize: 20,
                    }}>
                    {languageObj.close}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          visible={this.state.failedgetDegreeOfExamModal}
          onRequestClose={() => {
            this.setState({ failedgetDegreeOfExamModal: false });
          }}
          transparent={true}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View
              style={{
                width: width * 0.9,
                padding: 10,
                backgroundColor: '#fff',
                elevation: 22,
                borderRadius: 15,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.fontFamily,
                    color: COLORS.primary,
                    fontSize: 22,
                  }}>
                  {AppRequired.appName}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: 'center',
                  width: '90%',
                  borderWidth: 1.5,
                  borderColor: '#ddd',
                }}
              />

              <View style={{ paddingHorizontal: 20, paddingVertical: 12 }}>
                <Text
                  style={{
                    fontFamily: FONTS.fontFamily,
                    color: COLORS.primary,
                    fontSize: 17,
                    textAlign: 'center',
                  }}>
                  {languageObj.internetConnection}
                </Text>
              </View>

              <View
                style={{
                  alignSelf: 'center',
                  width: '90%',
                  borderWidth: 1.5,
                  borderColor: '#ddd',
                }}
              />

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 7,
                }}>
                <TouchableOpacity
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                  onPress={() => {
                    this.setState({ failedgetDegreeOfExamModal: false });
                  }}>
                  <Text
                    style={{
                      fontFamily: FONTS.fontFamily,
                      color: COLORS.primary,
                      fontSize: 20,
                    }}>
                    {languageObj.close}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          // presentationStyle="fullScreen"
          visible={this.state.image_modal}
          onRequestClose={() => {
            this.setState({
              image_modal: false,
            });
          }}
          animationType="slide">
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#000000',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  image_modal: false,
                });
              }}
              style={{
                width: 50,
                marginRight: 15,
                marginTop: 15,
                alignSelf: 'flex-end',
              }}>
              <FontAwesome5 name="times-circle" color="#ffffff" size={30} />
            </TouchableOpacity>
            <ImageZoom
              cropWidth={Dimensions.get('window').width}
              cropHeight={Dimensions.get('window').height - HEADER_HEIGHT}
              imageWidth={width}
              imageHeight={height * 0.4}>
              <Image
                source={{ uri: this.state.image_modal_src }}
                style={{
                  flex: 1,
                  // height: '100%',
                  // width: '100%',
                }}
                resizeMode="contain"
              />
            </ImageZoom>
          </View>
        </Modal>

        <ViewConnectionMsg ConnectionEnter={languageObj.internetConnection} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
  ConnectionView: {
    width: '100%',
    height: 20,
    position: 'absolute',
    zIndex: 222,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
