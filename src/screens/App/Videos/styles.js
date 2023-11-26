import { StyleSheet } from "react-native";
import { colors } from "theme/colors";


export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.white,
        // paddingHorizontal: 20,
    },
    FlatListContainer: {
        paddingHorizontal: 20,
        marginTop: 30,
        paddingBottom: 50
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        borderRadius: 15,
        marginBottom: 10,
        marginTop: 10,
        height: 140,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        width: '100%',
    },
    Image: {
        height: 140,
        width: '38%',
        borderRadius: 15,
        resizeMode: 'center',
        // tintColor:"#fff",
        // backgroundColor:colors.secblack
    },
    videoTitle:{
        fontSize: 16,
        fontWeight: '700',
        color: colors.secblack,
        paddingRight:5
    },
    Row: {
        height: '100%',
        paddingRight: 10,
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width:'62%'
    },
    WatchButton: {
        width: '95%',
        alignSelf: 'center',
        // backgroundColor:co
    }
});