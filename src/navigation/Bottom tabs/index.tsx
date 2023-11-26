import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from 'theme';
import styles from './styles';
import HomeScreen from 'screens/App/Home';
import { Bell, Book, Home, Profile } from 'assets/icons';
import { useSelector } from 'react-redux';
import { selectLang } from 'store/auth';
import { InitI18n } from 'src/i18n';
import MainProfileScreen from 'screens/App/Profile';
import TopBar from '../TopBar/TopBar';
import { exam, home, user, homework } from '../../assets/Images';
import { CoursesListScreen } from 'screens/App';
import FullQuestios from 'screens/App/FullQuestios';

const BottomTab = createBottomTabNavigator();


export default function BottomTabs() {

    return (
        <BottomTab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.Red,
                tabBarInactiveTintColor: colors.secblack,
                tabBarStyle: styles.tabBarStyle
            })}>
            <BottomTab.Screen name={"Home"} component={HomeScreen} options={{
                title: '',
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={styles.Calculator}>
                            <Image source={home} style={{
                                width: 30, height: 30
                            }}
                                resizeMode='contain'
                                tintColor={"#fff"}
                            />
                        </View>
                        :
                        <View style={styles.tabBarIcon}>
                            <Image source={home} style={{
                                width: 30, height: 30
                            }}
                                resizeMode='contain'
                                tintColor={"#000"}
                            />
                            <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 12, color: "#000" }}>Home</Text>
                        </View>
                )
            }}></BottomTab.Screen>


            {/* <BottomTab.Screen name={"CoursesListScreen"} component={CoursesListScreen} options={{
                title: '',
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={styles.Calculator}>
                            <Image source={homework} style={{
                                width: 30, height: 30
                            }}
                                resizeMode='contain'
                                tintColor={"#fff"}
                            />
                        </View>
                        :
                        <View style={styles.tabBarIcon}>
                            <Image source={homework} style={{
                                width: 30, height: 30
                            }}
                                resizeMode='contain'
                                tintColor={"#000"}
                            />
                            <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 12, color: "#000" }}>My Courses</Text>
                        </View>
                )
            }}
            ></BottomTab.Screen> */}

            <BottomTab.Screen name={"FullQuestios"} component={FullQuestios} options={{
                title: '',
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={styles.Calculator}>
                            <Image source={exam} style={{
                                width: 30, height: 30
                            }}
                                resizeMode='contain'
                                tintColor={"#fff"}
                            />
                        </View>
                        :
                        <View style={styles.tabBarIcon}>
                            <Image source={exam} style={{
                                width: 30, height: 30
                            }}
                                resizeMode='contain'
                                tintColor={"#000"}
                            />
                            <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 12, color: "#000" }}>Exams</Text>
                        </View>
                )
            }}
            ></BottomTab.Screen>



            <BottomTab.Screen name={"Profile"} component={MainProfileScreen} options={{
                title: '',
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={styles.Calculator}>
                            <Image source={user} style={{
                                width: 30, height: 30
                            }}
                                resizeMode='contain'
                                tintColor={"#fff"}
                            />
                        </View>
                        :
                        <View style={styles.tabBarIcon}>
                            <Image source={user} style={{
                                width: 30, height: 30
                            }}
                                resizeMode='contain'
                                tintColor={"#000"}
                            />
                            <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 12, color: "#000" }}
                            >Profile</Text>
                        </View>
                )
            }}></BottomTab.Screen>

        </BottomTab.Navigator>
    );
}



