//listen for the start of the browser
chrome.alarms.create("test", {delayInMinutes: 0.1}); //,periodInMinutes: 5});

//listen for the alarm
chrome.alarms.onAlarm.addListener(function(alarm) {
	chrome.notifications.create('Timer Notification', {
		type: "basic",
		iconUrl: "clock.png",
		title: "Time for a Break",
		message: "Look away for 20 seconds\nClick start to begin",
		buttons: [{'title': 'Start'}],
		requireInteraction: true
	});
});

//response to button being clicked
chrome.notifications.onButtonClicked.addListener(function(notificationId, buttonIndex) {
	//console.assert(notificationId == 'Timer Notification')
	if (notificationId == 'Timer Notification') {
		chrome.notifications.create('progress', {
			type: "progress",
			iconUrl: "clock.png",
			title: "Timer",
			message: "Stare at an item roughly 20 feet away",
			progress: 0
		},function(notificationId) {
			var num = new Array(5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100);
			for( i = 0; i < 20; i++) {
				var input = num[i];
				setTimeout(function(input) {
					chrome.notifications.update('progress', {progress: input});
					console.log(input);
				}, 1000);
			}
				
		});
	}
});
