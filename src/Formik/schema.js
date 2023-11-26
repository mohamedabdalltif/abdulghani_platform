import * as Yup from 'yup';

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const includeDigRegExp = /([0-9]+)/;
const includeCharRegExp = /([A-z]+)/;
const EmailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LoginSchema = Yup.object().shape({
    Email: Yup.string().email('E-mail must be valid').trim().min(8, 'Enter a valid e-mail').required('Please enter your e-mail ').matches(EmailReg, 'Invalid e-mail'),
    Password: Yup.string().required('Please enter your Password ').min(8, 'Password must be at least 8 numbers'),
})

export const RegistSchema = Yup.object().shape({
    Email: Yup.string().email('E-mail must be valid').trim().min(8, 'Enter a valid e-mail').required('Please Enter your E-mail').matches(EmailReg, 'Invalid e-mail'),
    Password: Yup.string().required('Please Enter your Password').min(8, 'Password must be at least 8 numbers'),
    Fullname: Yup.string().required('Please Enter your Full name'),
    Phonenumber: Yup.string().required('Please Enter your Mobile number').matches(phoneRegExp, 'Invalid mobile number'),
    Confirmpassword: Yup.string().required('Please Enter your Confirm password').min(8, 'Confirm Password must be at least 8 numbers').oneOf([Yup.ref('Password'), null], 'Passwords do not match'),
})

export const ForgetSchema = Yup.object().shape({
    Email: Yup.string().email('E-mail must be valid').trim().min(8, 'Enter a valid e-mail').required('Please Enter your E-mail').matches(EmailReg, 'Invalid e-mail'),
})
