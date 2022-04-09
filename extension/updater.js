chrome.tabs.query({
    active:true,
    currentWindow: true
}, (res)=>{
    if(res[0]){
        let domain = new URL(res[0].url).hostname
        document.getElementById('siteUpdate').innerText += domain
    }
})

function grabcardInfo() {

}

function sendDataToFrames() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        if (tabs[0]) {
            let activeTabId = tabs[0].id;
            chrome.webNavigation.getAllFrames({
                tabId: activeTabId
            }, (frames) => {
                if (frames.length) {
                    frames.forEach(entry => {
                        let code = "foundElements.forEach(entry=>{cFill(entry[0], patternObj[`${entry[1]}`].profileValue, entry[1])})"
                        chrome.tabs.executeScript(activeTabId, {
                            frameId: entry['frameId'],
                            code: code
                        });
                    });
                }
            })
        }

    })
}