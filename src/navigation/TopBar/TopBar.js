import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FullQuestios from 'screens/App/FullQuestios';
import PdfViewer from 'screens/App/PdfViewer/PdfViewer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from 'theme/colors';
const Tab = createMaterialTopTabNavigator();
const TopBar = () => {
  return (
    <SafeAreaView edges={['top']} style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <Tab.Navigator screenOptions={{}}>
        <Tab.Screen
          options={{
            title: ' Questions',
          }}
          name="FullQuestios"
          component={FullQuestios}
        />
        <Tab.Screen
          options={{
            title: 'Instruction',
          }}
          name="PdfViewer"
          component={PdfViewer}
        />
      </Tab.Navigator>
    </SafeAreaView>

  );
};
export default TopBar;
