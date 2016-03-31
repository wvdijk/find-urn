chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      (function(){
        var urn = document.getElementsByTagName('body')[0].getAttribute('data-article-urn');
        newSearch = 'http://elasticsearch.nrc.nl/api/v1/article/search?urn=' + urn;
        window.open(newSearch, '_blank');
         })();
    }
  }
);
