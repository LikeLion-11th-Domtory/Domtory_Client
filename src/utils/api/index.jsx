import axios from "axios";

class UserApi{
    static async getTodayMenu(formatedDateForApi, dayDivForApi){
        try{
            const response = await axios.get(`https://api.domtory.site/menu/${formatedDateForApi}/${dayDivForApi}/`)
            return response.data;
        } catch(error){
            throw error('getTodayMenu error');
        }
    };

    static async postFcmToken(token) {
        try{
            const response = await axios.post(`https://api.domtory.site/push/token/`,token)
        } catch(error){
            throw error('postFcmToken Error');
        }
    }

    static async PostDisableFcmToken(token){
        try{
            const response = await axios.post(`https://api.domtory.site/push/cancel/`,token)
        } catch(error){
            throw error('PostDisableFcmToken Error');
        }
    }

    static async getNotice() {
        try{
            const response = await axios.get(`https://api.domtory.site/notice/`);
            return response;
        } catch(error){
            throw error('getNotice Error');
        }
    }
}

export default UserApi;