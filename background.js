//listen for the start of the browser
chrome.alarms.create("test", {delayInMinutes: 0.1});

//listen for the alarm
chrome.alarms.onAlarm.addListener(function(alarm) {
	alert("Alarm went off");
});
