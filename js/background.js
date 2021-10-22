chrome.runtime.onMessage.addListener(function (req, sender, callback) {
	const api = "xxxxxx";

	fetch(api + req.id)
		.then((res) => {
			return res.text();
		})
		.then((data) => {
			callback({
				data: data,
				id: req.id,
			});
		});

	return true;
});
