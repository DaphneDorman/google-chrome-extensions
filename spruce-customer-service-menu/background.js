function post (url, data) {

    chrome.tabs.create(
        {
            url: chrome.extension.getURL("post.html")
        },
        function(tab) {
            var handler = function(tabId, changeInfo) {
                if (tabId === tab.id && changeInfo.status === "complete") {
                    chrome.tabs.onUpdated.removeListener(handler);
                    chrome.tabs.sendMessage(tabId, {
                        url: url,
                        data: data
                    });
                }
            };
            chrome.tabs.onUpdated.addListener(handler);
            chrome.tabs.sendMessage(
                tab.id,
                {
                    url: url,
                    data: data
            });
        }
    );

}
