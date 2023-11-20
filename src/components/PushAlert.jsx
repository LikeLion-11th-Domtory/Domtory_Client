import { registerServiceWorker } from "../utils/common/notification";

async function handelAllowNotification() {
    const permission = await Notification.requestPermission();
    registerServiceWorker();
}