import { StyleSheet } from "react-native";
import { colors } from "theme/colors";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.white,
        // paddingHorizontal: 20
    },
    
    HeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height:90,
        backgroundColor:colors.secblack,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        paddingHorizontal:20,
        marginBottom:20
    },
    HeaderTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.white
    },
    LottieView: {
        height: 300,
        width: '100%'
    },
    NoExam: {
        textAlign: 'center',
        fontWeight: '600',
        color: colors.black,
        fontSize: 20
    },
    CardContainer: {
        padding: 20,
        backgroundColor: colors.black,
        borderRadius: 20,
        marginBottom: 20
    },
    Logo: {
        position: 'absolute',
        right: 25,
        top: 25
    },
    CardTitle: {
        fontSize: 24,
        fontWeight: '400',
        color: colors.white,
        marginBottom: 15
    },
    cardDescription: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.white,
        marginTop: 1
    }
})