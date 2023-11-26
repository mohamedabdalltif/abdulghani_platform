import { StyleSheet } from "react-native";
import { colors } from "theme/colors";


export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.white,
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
        paddingHorizontal: 20,
    },
    HeaderTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.secblack
    },
    CardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        borderRadius: 15,
        marginBottom: 10,
        marginTop: 10,
        height: 120,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        width: '100%'
    },
    Image: {
        height: 120,
        width: '35%',
        borderRadius: 15,
        resizeMode: 'stretch'
    },
    Row: {
        height: '100%',
        paddingLeft: 10,
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '65%'
    },
    Title: {
        fontWeight: '500',
        color: colors.black
    },
    date: {
        fontSize: 10,
        fontWeight: '700',
        color: colors.Red
    }
});