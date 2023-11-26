import { StyleSheet } from "react-native";
import { colors } from "theme/colors";


export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    ImageBackground: {
        height: 300,
        width: '100%'
    },
    imageStyle: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    BackButton: {
        height: 45,
        width: 45,
        borderRadius: 40,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 15,
        left: 15,
    },
    SecContainer: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    Title: {
        fontSize: 18,
        fontWeight: '800',
        color: colors.secblack
    },
    Price: {
        fontSize: 17,
        fontWeight: '700',
        color: colors.Red,
        marginTop: 15
    },
    RowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    RollText: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.black,
        marginTop: 9
    },
    DescriptionTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: colors.secblack,
        paddingTop: 30
    },
    Description: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.secblack,
        paddingTop: 10
    }
})