chrome.contextMenus.create({
    contexts: ['page', 'frame'],
    title: "Checkout with copied MuseHash."
}, (cb) => {
    console.log(cb)
})

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (tab) {
        var code = "foundElements.forEach(entry=>{cFill(entry[0], patternObj[`${entry[1]}`].profileValue, entry[1])})"
        /* Inject the code into the current tab */
        chrome.tabs.executeScript(tab.id, {
            frameId: info['frameId'],
            code: code
        });
    }
});