import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'
import AuthStackScreens from 'src/navigation/Auth'
import AppStack from 'src/navigation/AppStack'
import { Provider, useSelector } from 'react-redux'
import { Store } from 'store/store'
import { InitI18n } from 'src/i18n'
import { selectLang } from 'store/auth'
import HomeScreen from 'screens/App/Home'
import BottomTabs from 'src/navigation/Bottom tabs'
import { NavigationContainer } from '@react-navigation/native'
import CoursesListScreen from 'screens/App/Courses List'
import MainProfileScreen from 'screens/App/Profile'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import SubjectDetailScreen from 'screens/App/Subject Details'
import RootStackScreens from 'src/navigation'
import VideosScreen from 'screens/App/Videos'
import AddSubscriptionScreen from 'screens/App/Add Subscription'
import NotificationScreen from 'screens/App/Notification'
import FullPageExam from 'screens/App/Full Page Exam'
import ViewVideoScreen from 'screens/App/View Video'

const App = () => {

  return (
    <>
      <Provider store={Store().store}>
        <I18nextProvider i18n={i18next}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <NavigationContainer>
              <RootStackScreens />
            </NavigationContainer>
          </SafeAreaProvider>
        </I18nextProvider>
      </Provider>
    </>
  )
}

export default App

const styles = StyleSheet.create({})