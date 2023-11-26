import { api } from "../_axios"

const sign_up_step1 = (body: any) => api.post('user/auth/sign_up_step1.php', body)
const sign_up_step2 = (body: any) => api.post('user/auth/student_new_signup_step_2.php', body)
const login = (body: any) => api.post('user/auth/new_login.php', body)


const AuthAPI = {
    sign_up_step1,
    sign_up_step2,
    login
};

export default AuthAPI;
