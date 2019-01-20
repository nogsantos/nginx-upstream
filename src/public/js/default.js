(() => {

	const viewTimer = document.querySelector("#timer");

	setInterval(() => {
		viewTimer.textContent = new Date();
	}, 0);

})();
