// // Install menu items to the context menu when the extension is installed
// chrome.runtime.onInstalled.addListener((message) => {
//     const contexts = [
//         'page',
//         'selection',
//         'link',
//         'editable',
//         'image',
//         'video',
//         'audio',
//     ]
//     // Clicking this item will send an event to the content script listening to messages
//     chrome.contextMenus.create({
//         title: 'Filter by duration',
//         id: 'filter-by-duration',
//         contexts: [...contexts, 'browser_action'],
//     })
// })

// function getActiveTab(): Promise<chrome.tabs.Tab> {
//     return new Promise((resolve) => {
//         chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//             resolve(tabs[0]);
//         })
//     });
// }

// // When a context menu item is clicked
// chrome.contextMenus.onClicked.addListener(async (info) => {
//     console.log(info)
//     if (info.menuItemId === 'filter-by-duration') {
//         const tab: chrome.tabs.Tab = await getActiveTab();
//         if (info.menuItemId === 'filter-by-duration') {
//             chrome.tabs.sendMessage(tab.id!, {
//                 type: 'filter-by-duration',
//                 ...info,
//             })
//         }
//     }
// });

const isThisBackground = true;
console.log('isThisBackground', isThisBackground);

