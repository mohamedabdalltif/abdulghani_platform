interface userState {
    lang: any;
    Done: boolean;
    DoneOTP: boolean;
    tempData: {
        name: string;
        email: string;
        mobile: string;
        password: string;
        student_token: string;
        student_serial: string;
    },
    SuccessSignUp:boolean,
    userLogin:boolean,
    userData:object
    
}

export const initialState: userState = {
    lang: 'ar',
    Done: false,
    DoneOTP: false,
    tempData: {
        email: "",
        name: "",
        mobile: "",
        password: "",
        student_serial: "",
        student_token: "",
    },
    SuccessSignUp:false,
    userData:{},
    userLogin:false

}