chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

    function cleanFeed(){
      jQuery('.AdBundle').hide();
      jQuery('.SuggestedUsersBundle').hide();
      jQuery('.QuestionStoryBundle').hide();
      jQuery('.SuggestedAMAsBundle').hide();
      jQuery('.HyperLinkBundle').hide();
      jQuery('.SuggestedTopicsBundle').hide();
    }

    cleanFeed();
    setInterval(cleanFeed, 2000);

	}
	}, 10);
});