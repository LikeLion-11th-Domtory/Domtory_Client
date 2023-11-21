import axios from 'axios';

export async function patchDeviceToken(){
    const data = await axios.patch(
        `/api/user/device-token`,{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer token`
            },
        },
    );
    return data;
}