const slider = document.querySelector("#delay-slider");
const display = document.querySelector("#delay-display");

function saveInterval(val) {
    chrome.storage.sync.set({"interval": val}, () => {});
}

function updateDisplay(val) {
    display.value = "Every " + (val / 60000) + " minutes";
}

chrome.storage.sync.get(["interval"], function (results) {
    interval = results["interval"];
    slider.value = interval;
    updateDisplay(interval);
});

slider.addEventListener("input", e => {
    saveInterval(e.target.value);
    updateDisplay(e.target.value);
})
