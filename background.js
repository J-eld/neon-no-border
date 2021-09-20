chrome.tabs.onUpdated.addListener(function (tabId, change, tab){
    if(tab.url == undefined){
        return;
    }
    else if(tab.url.match(/neontv.co/) == null){
        chrome.action.setIcon({path: 'icons/neon-no-border-inactive-16.png'});
    }
    else{
        chrome.action.setIcon({path: 'icons/neon-no-border-16.png'});
        const css = '*:focus-visible {outline: none}'
        chrome.scripting.insertCSS(
            {
                target: {tabId: tabId},
                css: css
            }
        )
        .then(e => console.log(e))
        .catch(e => console.log(e))
    }

});
