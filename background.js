chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ frequency: 60000 }, function () {
        console.log("Configured autosave.");
    });
});
