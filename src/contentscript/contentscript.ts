import { Command } from '../shared/api';
import { MetaMask } from './metamask';
import './contentscript.scss';
declare var chrome;

const isThisContentscript = true;
console.log('isThisContentscript:', isThisContentscript);

let metaMask: MetaMask;

(async () => {
  console.log('waiting for variable');
  while (!window.hasOwnProperty('ethereum'))
    // define the condition as you like
    await new Promise((resolve) => setTimeout(resolve, 1000));
  const ethereum = window['ethereum'];
  metaMask = new MetaMask(ethereum);
})();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request) {
    case Command.Connect:
      metaMask.connect();
      break;
  }
});
