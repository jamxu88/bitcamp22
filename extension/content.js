let patternObj = {
    'REGEX_NAME_CARD_CVV': {
        "regex": new RegExp("verification|card.?identification|security.?code|card.?code" + "|security.?value" + "|security.?number|card.?pin|c-v-v" + "|(cvn|cvv|cvc|csc|cvd|cid|ccv)(field)?" + "|\\bcid\\b", "i"),
        "profileValue": "123"
    },
    'REGEX_NAME_CARD_EXP_MONTH': {
        "regex": new RegExp("exp.*mo|ccmonth|card.?month|addmonth", "i"),
        "profileValue": "05"

    },
    'REGEX_NAME_CARD_EXP_YEAR': {
        "regex": new RegExp("(?:exp|payment|card).*(?:year|yr)", "i"),
        "profileValue": "2025"

    },
    'REGEX_NAME_CARD_EXP_DATE': {
        "regex": new RegExp("expir|exp.*date|^expfield$", "i"),
        "profileValue": "04/25"

    },
    'REGEX_NAME_CARD_EXP_DATE_MMYY': {
        "regex": new RegExp("^\\s*MM\\s*/\\s*YY\\s*$", "i"),
        "profileValue": "0525"
    },
    'REGEX_NAME_CARD_EXP_DATE_YY': {
        "regex": new RegExp("^\\s*YY\\s*$", "i"),
        "profileValue": "25"
    },
    'REGEX_NAME_CARD_EXP_DATE_MM': {
        "regex": new RegExp("^\\s*MM\\s*$", "i"),
        "profileValue": "04"
    },
    'REGEX_NAME_CARD_EXP_DATE_YYYY': {
        "regex": new RegExp("^\\s*YYYY\\s*$", "i"),
        "profileValue": "2025"
    },
    'REGEX_NAME_CARD_NUMBER': {
        "regex": new RegExp("(add)?(?:card|cc|acct).?(?:number|#|no|num|field)|carn|credit.*?card.*?cnb", "i"),
        "profileValue": "4242 4242 4242 4242"
    },
};
let acceptableElements = ["DIV", "INPUT", "SELECT", "BODY", "FORM"]
let foundElements = []
Object.keys(patternObj).forEach(pattern => {
    let observer = new MutationObserver((mutations, instance) => {
        if (Array.prototype.slice.call(mutations).find(mutationRecord => Array.prototype.slice.call(mutationRecord.addedNodes).find(addedNode => acceptableElements.indexOf(addedNode.nodeName) != -1) != undefined) != undefined) {
            for (i = 0; i < document.getElementsByTagName("input").length; i++) {
                let el = document.getElementsByTagName("input")[i]
                if (Array.prototype.slice.call(el.attributes).find(attr => attr.value.includes("newsletter")) == undefined && Array.prototype.slice.call(el.attributes).find(attr => attr.name != "style" && attr.name != "class" && patternObj[pattern].regex.test(attr.value) == true) != undefined && el.disabled != true) {
                    console.log(el)
                    foundElements.push([el, pattern])
                }
            }
            for (a = 0; a < document.getElementsByTagName("select").length; a++) {
                let el = document.getElementsByTagName("select")[a]
                if (Array.prototype.slice.call(el.attributes).find(attr => attr.name != "style" && attr.name != "class" && attr.value.includes("newsletter") == false && attr.value.includes("opacity") == false && attr.value.includes("authenticity") == false && patternObj[pattern].regex.test(attr.value) == true) != undefined && el.disabled != true && el.type != "hidden") {
                    console.log(el)
                    foundElements.push([el, pattern])
                }
            }
        }
    })
    observer.observe(document, {
        attributes: true,
        childList: true,
        subtree: true
    });
});

function cFill(element, value, key) {
    console.log(element, value, key)
    findOption = function (options, value) {
        let findByValue = Array.prototype.slice.call(options).find(opt => opt.value === value);
        let findByContent = Array.prototype.slice.call(options).find(opt => opt.textContent === value);
        if (findByValue != undefined) {
            return findByValue.value;
        }
        if (findByContent != undefined) {
            return findByContent.value
        }
    }
    if (element.value != value || element.value.length == 0) {
        if (element.type === "hidden") {
            return;
        } else if (key === "REGEX_NAME_CARD_EXP_MONTH" && element.nodeName === "SELECT") {
            if (Array.prototype.slice.call(element.options).find(opt => opt.value === "01") != undefined) {
                element.focus();
                element.value = patternObj[key].profileValue
                if (element.value != patternObj[key].profileValue) {
                    document.execCommand("insertText", false, patternObj[key].profileValue)
                }
                element.dispatchEvent(new Event("change", {
                    bubbles: true,
                    cancelable: false
                }));
                element.blur();
            } else {
                element.focus();
                element.value = parseInt(patternObj[key].profileValue);
                if (element.value != parseInt(patternObj[key].profileValue)) {
                    document.execCommand("insertText", false, parseInt(patternObj[key].profileValue))
                }
                element.dispatchEvent(new Event("change", {
                    bubbles: true,
                    cancelable: false
                }));
                element.blur();
            }
        } else if (key === "REGEX_NAME_STATE" && element.nodeName === "SELECT") {
            if (findOption(Array.prototype.slice.call(element.options), value) != undefined) {
                element.focus();
                element.value = findOption(Array.prototype.slice.call(element.options), value)
                element.dispatchEvent(new Event("change", {
                    bubbles: true,
                    cancelable: false
                }));
                element.blur();
            } else {
                element.focus();
                element.value = profile.stateId
                element.dispatchEvent(new Event("change", {
                    bubbles: true,
                    cancelable: false
                }));
                element.blur();
            }
        } else if (key === "REGEX_NAME_COUNTRY" && element.nodeName === "SELECT") {
            if (findOption(Array.prototype.slice.call(element.options), value) != undefined) {
                element.focus();
                element.value = findOption(Array.prototype.slice.call(element.options), value)
                element.dispatchEvent(new Event("change", {
                    bubbles: true,
                    cancelable: false
                }));
                element.blur();
            } else {
                element.focus();
                element.value = "USA"
                if (element.value != "USA") {
                    element.value = "US"
                }
                element.dispatchEvent(new Event("change", {
                    bubbles: true,
                    cancelable: false
                }));
                element.blur();
            }
        } else {
            element.focus();
            element.value = value
            if (element.value != value) {
                document.execCommand('insertText', false, value)
            }
            element.dispatchEvent(new Event("change", {
                bubbles: true,
                cancelable: false
            }));
            element.blur();
        }
    }
}