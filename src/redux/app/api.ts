import { api } from "../_axios"

const select_subject = (body: any) => api.post('user/home/select_my_courses.php', body)
const select_chain = (body: any) => api.post('user/home/select_my_chain.php', body)



const AppAPI = {
    select_subject,
    select_chain
    
};

export default AppAPI;
