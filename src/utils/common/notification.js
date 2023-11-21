export function registerServiceWorker() {
    navigator.serviceWorker
        .register("firebase-messaging-sw.js")
        .then(function(registeration){
            console.log('Service Worker 등록 성공: ',registeration);
        })
        .catch(function(error){
            console.log('Service Worker 등록 실패: ', error);
        })
}