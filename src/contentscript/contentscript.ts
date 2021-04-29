import './contentscript.scss';
declare var chrome;

const isThisContentscript = true;
console.log('isThisContentscript:', isThisContentscript);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request);
});
