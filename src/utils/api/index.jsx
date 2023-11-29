import axios from "axios";

class UserApi{
    static async getTodayMenu(formatedDateForApi, time){
        try{
            const response = await axios.get(`https://api.domtory.site/menu/${formatedDateForApi}/${time}/`)
            return response.data;
        } catch(error){
            throw new error();
        }
    };

    static async postFcmToken(token) {
        try{
            const response = await axios.post(`https://api.domtory.site/push/token/`,token)
        } catch(error){
            throw new error();
        }
    }

    static async PostDisableFcmToken(token){
        try{
            const response = await axios.post(`https://api.domtory.site/push/cancel/`,token)
        } catch(error){
            throw new error();
        }
    }
}

export default UserApi;