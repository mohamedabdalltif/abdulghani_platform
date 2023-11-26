import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from 'theme/colors'
import Header from './components/Header'

const QuestionScreen = () => {
  const [answers, setAnswers] = React.useState([])

  const Loo = () => {
    const arr = []
    for (let index = 0; index < 4; index++) {
      arr.push({ id: 0, ans: 0 })
    }
    console.log(arr)
    setAnswers(arr)
  }
  useEffect(() => {
    console.log(answers)
    Loo()
  }, [])
  return (
    <SafeAreaView edges={['top']} style={{
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: colors.white
    }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          [{}, {}, {}, {}, {}]?.map((QuestionItem, QuestionIndex) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{
                  fontSize: 18,
                  fontWeight: '700',
                  marginTop: 20
                }}>({QuestionIndex + 1}) Question Text Text Text Text Text Text Text Text Text</Text>
                <FlatList
                  scrollEnabled={false}
                  style={{ marginTop: 20 }}
                  data={[{}, {}, {}, {}]}
                  renderItem={({ index }) => {
                    return (
                      <>
                        <TouchableOpacity
                          onPress={() => {
                            const NewArr = [...answers]
                            NewArr[QuestionIndex] = { id: QuestionIndex, selected: index }
                            console.log(NewArr)
                            setAnswers(NewArr)
                          }}
                          style={{
                            paddingVertical: 15,
                            width: '100%',
                            borderColor: answers[QuestionIndex]?.selected == index ? colors.Red : colors.black,
                            backgroundColor: answers[QuestionIndex]?.selected == index ? colors.Red : colors.white,
                            borderWidth: .6,
                            marginTop: 10,
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            paddingHorizontal: 15
                          }}>
                          <Text style={{
                            color: answers[QuestionIndex]?.selected == index ? colors.white : colors.black,
                            fontWeight: '600'
                          }}>Ans Ans Ans Ans  Ans Ans Ans v v Ans Ans Ans Ans {index}</Text>
                        </TouchableOpacity >
                      </>
                    )
                  }}
                />
              </View>
            )
          })
        }
      </ScrollView>


    </SafeAreaView >
  )
}

export default QuestionScreen