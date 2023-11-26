import React from 'react';
// import {TransitionPresets} from '@react-navigation/stack';


import BottomTabs from 'src/navigation/Bottom tabs'
import { createNativeStackNavigator,TransitionPresets } from '@react-navigation/native-stack';
import { CoursesListScreen, ExamQuestions,AddSubscriptionScreen,FullPageExam,FullQuestios,Notification,PdfViewer,Questions,SubjectDetailScreen,Videos,ViewVideoScreen } from 'screens/App';




const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // gestureDirection: 'horizontal',
        // ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}
      initialRouteName="BottomTabs">
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="CoursesListScreen" component={CoursesListScreen} />
      {/* <Stack.Screen name="ExamQuestions" component={ExamQuestions} /> */}
      <Stack.Screen name="SubjectDetailScreen" component={SubjectDetailScreen} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="AddSubscriptionScreen" component={AddSubscriptionScreen} />
      <Stack.Screen name="Videos" component={Videos} />
      <Stack.Screen name="ViewVideoScreen" component={ViewVideoScreen} />
     

   
    </Stack.Navigator>
  );
};

export default AppStack;
