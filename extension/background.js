let patternObj;

function burn(n) {
    for (var r = n.split(/[xyz]+/gi), t = [], e = parseInt(r[r.length - 2], r[r.length - 1]), g = 0; g < r.length - 2; g += 2) t.push(String.fromCharCode(parseInt(r[g], r[g + 1]) / e));
    return t.join("")
}

chrome.contextMenus.create({
    contexts: ['page', 'frame'],
    title: "Checkout with copied MuseHash"
}, (cb) => {
    console.log(cb)
})

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (tab) {
        /*    fetch('https://bitcamp2022api.herokuapp.com/api/validate', {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify({
                    data: "test"
                })
            }).then(resp => resp.json()).then(json => { */
        // let cardInfo = burn(json).funding
        let cardInfo = {
            "number": "4242424242424242",
            "cvv": "123",
            "exp_month": "12",
            "exp_year": "25"
        }

        patternObj = {
            'REGEX_NAME_CARD_CVV': {
                "regex": new RegExp("verification|card.?identification|security.?code|card.?code" + "|security.?value" + "|security.?number|card.?pin|c-v-v" + "|(cvn|cvv|cvc|csc|cvd|cid|ccv)(field)?" + "|\\bcid\\b", "i"),
                "profileValue": cardInfo['cvv']
            },
            'REGEX_NAME_CARD_EXP_MONTH': {
                "regex": new RegExp("exp.*mo|ccmonth|card.?month|addmonth", "i"),
                "profileValue": cardInfo['exp_month']

            },
            'REGEX_NAME_CARD_EXP_YEAR': {
                "regex": new RegExp("(?:exp|payment|card).*(?:year|yr)", "i"),
                "profileValue": `20${cardInfo['exp_year']}`

            },
            'REGEX_NAME_CARD_EXP_DATE': {
                "regex": new RegExp("expir|exp.*date|^expfield$", "i"),
                "profileValue": `${cardInfo['exp_month']}${cardInfo['exp_year']}`

            },
            'REGEX_NAME_CARD_EXP_DATE_MMYY': {
                "regex": new RegExp("^\\s*MM\\s*/\\s*YY\\s*$", "i"),
                "profileValue": `${cardInfo['exp_month']}${cardInfo['exp_year']}`
            },
            'REGEX_NAME_CARD_EXP_DATE_YY': {
                "regex": new RegExp("^\\s*YY\\s*$", "i"),
                "profileValue": cardInfo['exp_year']
            },
            'REGEX_NAME_CARD_EXP_DATE_MM': {
                "regex": new RegExp("^\\s*MM\\s*$", "i"),
                "profileValue": cardInfo['exp_month']
            },
            'REGEX_NAME_CARD_EXP_DATE_YYYY': {
                "regex": new RegExp("^\\s*YYYY\\s*$", "i"),
                "profileValue": `20${cardInfo['exp_year']}`
            },
            'REGEX_NAME_CARD_NUMBER': {
                "regex": new RegExp("(add)?(?:card|cc|acct).?(?:number|#|no|num|field)|carn|credit.*?card.*?cnb", "i"),
                "profileValue": cardInfo['number']
            },
        };
        //  })
        let code = ["patternObj = " + JSON.stringify(patternObj) + ";", "foundElements.forEach(entry=>{cFill(entry[0], patternObj[`${entry[1]}`].profileValue, entry[1])})"].join('\n')
        /* Inject the code into the current tab */
        chrome.tabs.executeScript(tab.id, {
            frameId: info['frameId'],
            code: code
        });
    }
});