import React from 'react';
import { Formik } from 'formik';
import { regist_initial_values } from 'src/Formik/initialValues';
import { RegistSchema } from 'src/Formik/schema';
import Input from 'components/Input';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../style';
import { Arrow, Logo } from 'assets/icons';
import Button from 'components/Button';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from 'store/store';
import AuthSlice, { selectDone } from 'store/auth';
import DeviceInfo from 'react-native-device-info';
import AuthThunks from 'store/auth/thunks';
import { useSelector } from 'react-redux';
import { useLoadingSelector } from 'store/selectors';
import { AppLogo } from 'assets/Images';
import { Image } from 'react-native-animatable';
function Form() {
  const dispatch = useAppDispatch()
  const { navigate, goBack } = useNavigation<any>()
  // const serial = DeviceInfo.getSerialNumber()
  const verficationCode = Math.floor(100000 + Math.random() * 90000);
  const Done = useSelector(selectDone)
  const loading = useLoadingSelector(AuthThunks.doSignUpStep1())
  // const Token = DeviceInfo.getDeviceToken()

  React.useEffect(() => {
    dispatch(AuthSlice.changeOTPDone(false))
    Done && navigate('OTP', { code: verficationCode })
  }, [Done])
  return (
    <Formik
      initialValues={regist_initial_values}
      validationSchema={RegistSchema}
      onSubmit={values => {
        dispatch(AuthThunks.doSignUpStep1({
          email: values.Email,
          code: verficationCode
        })).then(() => {
          dispatch(AuthSlice.changeTempData({
            name: values.Fullname,
            email: values.Email,
            mobile: values.Phonenumber,
            password: values.Password,
            student_token: 'cQ82fo8l9kiYo2czJpmX8S:APA91bH94Y0TR9egJ14i4JU6LHVsaEQ-CHeypv7OmnZCEuXGRdgRHJszOcSjOGQBtK4dvuAUqRN-2BpUysP1m8mAnesazFBYsjJKvsw7-ZZYNOTlUYc5MmI8HlVHtfuXcAvSnMTXU1yo',
            student_serial: 'serialzxdcwcwye45t5',
          }))
        })
      }}>
      {props => (
        <>
          <TouchableOpacity onPress={() => { goBack() }} activeOpacity={.9} style={styles.Row}>
            <Arrow />
            <Text style={styles.Title}>Create new account</Text>
          </TouchableOpacity>
          <View style={styles.InputsContainer}>
            <Image style={{
              alignSelf: 'center',
              marginVertical: 30,
              height: 100,
              width: 250,
              resizeMode: 'cover'
            }} source={AppLogo} />
            <Input
              {...props}
              Label="Full name"
              placeholder="Enter your full name"
            />
            <Input
              {...props}
              Label="E-mail"
              placeholder="Enter your e-mail address"
            />
            <Input
              {...props}
              Label="Phone number"
              placeholder="Enter your e-mail address"
            />
            <Input
              {...props}
              secureTextEntry
              Label="Password"
              placeholder="Enter your password"
            />
            <Input
              {...props}
              secureTextEntry
              Label="Confirm password"
              placeholder="Enter your confirm password"
            />

            <Button
              loading={loading}
              fill
              title="Create account"
              style={styles.Button}
              onPress={() => props.handleSubmit()}
            />

          </View>
        </>
      )}
    </Formik>
  );
}

export default Form;
