import { patchDeviceToken } from "../utils/api/patchDeviceToken";
import { registerServiceWorker } from "../utils/common/notification";

async function handelAllowNotification() {
    const permission = await Notification.requestPermission();
    registerServiceWorker();
    // getDeviceToken().then(() => {
    //     patchDeviceToken(deviceToken.token);
    // })
}

export default handelAllowNotification;