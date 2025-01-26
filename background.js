chrome.webNavigation.onCompleted.addListener(async (details) => {
    const { tabId, url } = details;
    const patterns = [/\/terms$/, /\/terms-and-conditions$/, /\/tos$/];
    if (patterns.some((pattern) => pattern.test(url))) {
        try {
            await chrome.scripting.executeScript({
                target: { tabId },
                files: ["content.js"],
            });
        } catch (error) {
            console.error("Error injecting content script:", error);
        }
    }
}, {
    url: [{ urlMatches: ".*" }],
});
