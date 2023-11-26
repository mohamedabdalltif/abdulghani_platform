import { StyleSheet } from "react-native";
import { colors } from "theme/colors";


export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.white,
        // paddingHorizontal: 20,
    },
    HeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height:90,
        backgroundColor:colors.secblack,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        paddingHorizontal:20
    },
    HeaderTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.white
    },
    CardContainer: {
        height: 220,
        width: '47%',
        backgroundColor: colors.lwhite,
        borderRadius: 15,
    },
    Image: {
        height: 150,
        width: '100%',
        resizeMode: 'stretch',
        borderRadius: 15
    },
    TextConatiner: {
        justifyContent: 'space-between',
        height: 70,
        paddingBottom: 13,
        paddingTop:10,
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    LessonName:{
        fontSize: 14,
        fontWeight: '600',
        color: colors.secblack
    },
    ClassText:{
        fontSize: 13,
        fontWeight: '400',
        color: colors.border
    },
    LectureText:{
        fontSize: 13,
        fontWeight: '400',
        color: colors.border
    }
});