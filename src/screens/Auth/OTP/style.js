import { StyleSheet } from 'react-native';
import { colors } from 'theme/colors';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  InputsContainer: {
    paddingHorizontal: 20,
  },
  Logo: {
    alignSelf: 'center',
    marginVertical: 30,
    height: 100,
    width: 250,
    resizeMode: 'contain'
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  Title: {
    color: colors.black,
    fontWeight: '700',
    fontSize: 18,
    marginLeft: 10,
    textTransform: 'uppercase'
  },
  Button: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    width: '90%',
    backgroundColor: colors.secblack,
    borderColor: colors.secblack
  },
  cellRoot: {
    width: 67,
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#707070',
    borderWidth: 1,
    opacity: 0.5,
    alignSelf: 'center',
    backgroundColor: '#F5F5F5'
  },
  focusCell: {
    borderColor: colors.Red,
    borderWidth: 2,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },
  Label: {
    fontSize: 20,
    fontWeight: '500',
    textTransform: 'uppercase',
    marginBottom: 10,
    marginTop: 40,
  },
  ResendText: {
    marginTop: 50,
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
    color: colors.Red,
    marginLeft: 20
  },
  counter: {
    textDecorationLine: 'none',
    marginTop: 50,
    fontSize: 14,
    fontWeight: '400',
    textTransform: 'uppercase',
    color: colors.Red
  },
});
