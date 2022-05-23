window.addEventListener("keydown", (x) => {
	const key = document.getElementById("event.key");
	const location = document.getElementById("event.location");
	const which = document.getElementById("event.which");
	const code = document.getElementById("event.code");
	const generated = document.getElementById("generated");

    key.innerText = x.key;
	location.innerText = x.location;
	which.innerText = x.which;
	code.innerText = x.code;
    generated.innerText = x.which;
})