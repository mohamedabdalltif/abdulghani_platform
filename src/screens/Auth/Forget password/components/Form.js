import React from 'react';
import { Formik } from 'formik';
import { forget_initial_values } from 'src/Formik/initialValues';
import { ForgetSchema } from 'src/Formik/schema';
import Input from 'components/Input';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../style';
import { Arrow } from 'assets/icons';
import Button from 'components/Button';
import { useNavigation } from '@react-navigation/native';
import { AppLogo } from 'assets/Images';


function Form() {
  const { goBack, navigate } = useNavigation()
  return (
    <Formik
      initialValues={forget_initial_values}
      validationSchema={ForgetSchema}
      onSubmit={values => {
        const verficationCode = Math.floor(100000 + Math.random() * 90000);
        navigate('OTP',{code:verficationCode})
      }}>
      {props => (
        <>
          <TouchableOpacity onPress={() => { goBack() }} activeOpacity={.9} style={styles.Row}>
            <Arrow />
            <Text style={styles.Title}>Forget password</Text>
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
              Label="E-mail"
              placeholder="Enter your e-mail address"
            />
          </View>

          <Button
            fill
            title="Create account"
            style={styles.Button}
            onPress={() => props.handleSubmit()}
          />
        </>
      )}
    </Formik>
  );
}

export default Form;
