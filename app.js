window.addEventListener("keydown", (event) => {
	const key = document.getElementById("event.key");
	const location = document.getElementById("event.location");
	const which = document.getElementById("event.which");
	const code = document.getElementById("event.code");
	const generated = document.getElementById("generated");

    key.innerText = event.key;
	location.innerText = event.location;
	which.innerText = event.which;
	code.innerText = event.code;
    generated.innerText = event.which;
})