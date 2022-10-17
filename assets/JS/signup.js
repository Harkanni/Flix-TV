// SIGN UP PAGE
const redirects = document.querySelectorAll(".redirect")
redirects.forEach((redirect) => {
	redirect.addEventListener("click", (evt) => {
		// PREVENT SUBMITTING FORM
		evt.preventDefault()

		// TRIGGER MODAL
		$('#exampleModal').modal();


		// START TIMER
		const timer = document.querySelector(".timer")
		var time = 10;
		var interval = setInterval(() => {
			time--;
			timer.innerHTML = `${time}s`;

			if(time <= 0){
				clearInterval(interval)
				window.location = "./index.html"
			}
		},1000);


	})
})
	