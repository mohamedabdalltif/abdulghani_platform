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
      borderColor:colors.secblack
  }
});
