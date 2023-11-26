import { StyleSheet } from 'react-native';
import { colors } from 'theme/colors';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.white,
    // direction:'rtl'
  },
  InputsContainer: {
    paddingHorizontal: 20,
  },
  Logo: {
    alignSelf: 'center',
    marginVertical: 30,
    height: 100,
    width: 250,
    resizeMode: 'cover'
  },
  ForgotPassword: {
    color: colors.black,
    fontSize: 15,
    textDecorationLine: 'underline',
    textAlign: 'right',
    marginVertical: 20,
    fontWeight: '400'
  },
  SocialText: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 40,
  },
  SocialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 15
  },
  Social: {
    height: 80,
    width: 80,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 20
  },
  RowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  CreateNewText: {
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginVertical: 10
  }
});
