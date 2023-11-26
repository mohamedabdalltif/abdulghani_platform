import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStackScreens from './Auth';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './Bottom tabs';
import { useSelector } from 'react-redux';
import { selectLang, selectUserLogin } from 'store/auth';
import { InitI18n } from 'src/i18n';
import { CoursesListScreen, ExamQuestions, AddSubscriptionScreen, FullPageExam, FullQuestios, Notification, PdfViewer, Questions, SubjectDetailScreen, Videos, ViewVideoScreen } from '../screens/App';
import SplashScreen from 'screens/Splash';
import { useAppDispatch, useAppSelector } from 'store/store';



const RootStack = createNativeStackNavigator();

const RootStackScreens = () => {
    const Lang = useSelector(selectLang)
    const userLogin = useAppSelector(selectUserLogin)
    useEffect(() => {

        InitI18n('en')
    }, [Lang])
    const [Splash, setSplash] = React.useState(true)

    useEffect(() => {

        setTimeout(() => {
            setSplash(false)
        }, 2100)
    }, [])
    return (
        <RootStack.Navigator
            screenOptions={{ headerShown: false }
            }
            initialRouteName="Splash"
        >
            {Splash && <RootStack.Screen name="Splash" component={SplashScreen} />}

            {!userLogin && <RootStack.Screen name="Auth" component={AuthStackScreens} />}

            <RootStack.Screen name="App" component={BottomTabs} />
            <RootStack.Screen name="CoursesListScreen" component={CoursesListScreen} />
            {/* <Stack.Screen name="ExamQuestions" component={ExamQuestions} /> */}
            <RootStack.Screen name="SubjectDetailScreen" component={SubjectDetailScreen} />
            <RootStack.Screen name="Notification" component={Notification} />
            <RootStack.Screen name="AddSubscriptionScreen" component={AddSubscriptionScreen} />
            <RootStack.Screen name="Videos" component={Videos} />
            <RootStack.Screen name="ViewVideoScreen" component={ViewVideoScreen} />
            <RootStack.Screen name="FullPageExam" component={FullPageExam} />

        </RootStack.Navigator>
    );
};

export default RootStackScreens;
