(function () {
	const timer = setInterval(autoShow, 100);

	function autoShow() {
		const button = document.getElementsByClassName("tw-link--button")[0];
		if (button !== void 0) {
			if (button.dataset.testSelector === "ShowLess") {
				clearInterval(timer);
			} else {
				button.click();
			}
		}
	}
})();
