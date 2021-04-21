const ua = navigator.userAgent.toLocaleLowerCase();
export const isAndroid = /(?:android)/.test(ua);
export const isIOS = /(?:iphone)/.test(ua);
export const isPc = !isIOS && !isAndroid;
export const isNeedSafeBottom = isIOS && window.screen.height >= 812;
export const isNeedSafeTop = window.location.href.indexOf("native") > -1;
