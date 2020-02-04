chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ frequency: 300 }, function () {
        console.log("Configured autosave.");
    });
});
