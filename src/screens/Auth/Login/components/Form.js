import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { login_initial_values } from 'src/Formik/initialValues';
import { LoginSchema } from 'src/Formik/schema';
import Input from 'components/Input';
import { Image, Text, View } from 'react-native';
import { styles } from '../style';
import { Apple, FaceBook, Google } from 'assets/icons';
import Button from 'components/Button';
import SocialIcon from './Social';
import { useNavigation } from '@react-navigation/native';
import { AppLogo } from 'assets/Images';
import AuthSlice, { selectDone, selectUserData, selectUserLogin } from 'store/auth';
// import DeviceInfo from 'react-native-device-info';
import AuthThunks from 'store/auth/thunks';
import { useSelector } from 'react-redux';
import { useLoadingSelector } from 'store/selectors';
import { useAppDispatch, useAppSelector } from 'store/store';
import messaging from '@react-native-firebase/messaging';
import DeviceInfo from 'react-native-device-info';
import { colors } from 'theme/colors';

function Form() {
  const dispatch = useAppDispatch()
  const { navigate } = useNavigation()
  const user = useAppSelector(selectUserData)
  const login = useSelector(selectUserLogin)
  const loading = useLoadingSelector(AuthThunks.login())


  return (
    <Formik
      initialValues={login_initial_values}
      validationSchema={LoginSchema}
      onSubmit={async values => {
        // console.log(login)
        let serial = await DeviceInfo.getUniqueId()
        dispatch(AuthThunks.login({
          email: values.Email,
          password: values.Password,
          student_serial: serial

        }))

      }}>
      {props => (
        <>
          <View style={styles.InputsContainer}>
            <Image style={styles.Logo} source={AppLogo} />
            <Input
              {...props}
              Label="E-mail"
              placeholder="Enter your e-mail address"
            />
            <Input
              {...props}
              secureTextEntry
              Label="Password"
              placeholder="Enter your password"
            />

            <Text onPress={() => { navigate('ForgetPassword') }} style={styles.ForgotPassword}>Forgot password?</Text>

            <Button loading={loading} style={{
              backgroundColor: colors.secblack,
              borderColor: colors.secblack
            }} fill title="Login" onPress={() => props.handleSubmit()} />
            <Text onPress={() => { navigate('Regist') }} style={styles.CreateNewText}>Create new account</Text>
            {/* <Text style={styles.SocialText}>Or register by social media</Text> */}

            {/* <View style={styles.SocialContainer}>
              <SocialIcon Icon={Apple} loading={false} onPress={() => { }} />
              <SocialIcon Icon={FaceBook} loading={false} onPress={() => { }} />
              <SocialIcon Icon={Google} loading={false} onPress={() => { }} />
            </View> */}
          </View>
        </>
      )}
    </Formik>
  );
}

export default Form;
