"use strict";

let interval = null;
let timeout = null;

console.log("ASFDFDSAFSFSD");

chrome.storage.sync.get(["interval"], function (results) {
    interval = results["interval"];
    console.log(interval);
    setTimeout(() => {
        timeout = setInterval(() => {
            window.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 83, ctrlKey: true }))
        }, interval);
    },
        10000);
});

chrome.storage.onChanged.addListener((changes, areaName) => {
    if (changes["interval"] !== undefined) {
        interval = changes["interval"].newValue;
        clearInterval(timeout);
        timeout = setInterval(() => {
            window.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 83, ctrlKey: true }))
        }, interval);
    }
})
