/*
 * Firebase Cloud Messaging 서비스워커.
 *
 * - PWA 서비스워커(workbox, scope "/")와 따로 scope "/firebase-cloud-messaging-push-scope" 로 등록됩니다
 *   (src/services/notifications/firebasePush.ts). workbox precache 대상에서는 빠져 있습니다(vite.config.ts globIgnores).
 * - Vite 가 처리하지 않는 정적 파일이라 import.meta.env 를 못 씁니다. 설정은 등록 URL 쿼리스트링으로 받습니다.
 * - importScripts 버전은 package.json 의 firebase 버전(정확히 고정)과 같아야 합니다.
 * - 알림 클릭 이동은 BE 가 넣는 webpush.fcm_options.link 를 SDK 가 처리합니다.
 */
importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js");

(function () {
  var params = new URLSearchParams(self.location.search);
  var config = {
    apiKey: params.get("apiKey"),
    authDomain: params.get("authDomain") || undefined,
    projectId: params.get("projectId"),
    storageBucket: params.get("storageBucket") || undefined,
    messagingSenderId: params.get("messagingSenderId"),
    appId: params.get("appId"),
  };
  if (!config.apiKey || !config.projectId || !config.messagingSenderId || !config.appId) {
    return;
  }
  firebase.initializeApp(config);
  firebase.messaging();
})();
