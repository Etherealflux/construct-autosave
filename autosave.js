"use strict";

let interval = null;

console.log("ASFDFDSAFSFSD");

chrome.storage.sync.get(["interval"], function (results) {
    interval = results["interval"];
    console.log(interval);
    setTimeout(() => {
        setInterval(() => {
            window.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 83, ctrlKey: true }))
        }, interval);
    },
        10000);
});
