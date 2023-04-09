const path = require("path");

window.addEventListener("DOMContentLoaded", () => {
	const webbg = document.createElement("div");
	webbg.id = "webbg";
	webbg.style.position = "fixed";
	webbg.style.inset = "0";
	webbg.style.zIndex = "-9";
	webbg.style.backgroundPosition = "center";
	webbg.style.backgroundSize = "cover";
	webbg.setAttribute("aria-hidden", "true");
	webbg.style.backgroundImage = `url("${path
		.join(__dirname, "../../../public/images/bg/default.jpg")
		.replace(/\\/g, "/")}")`;

	// filter: brightness(0.7);
	document.body.appendChild(webbg);

	// 当拖拽到元素上会触发 dragover 事件，此处需要阻止事件的发生。
	document.addEventListener(
		"dragover",
		(event) => {
			event.preventDefault();
		},
		false
	);
	// 当拖拽到元素上并释放时会触发 drop 事件
	document.addEventListener("drop", function (event) {
		console.log(event.dataTransfer.files[0]);
		let file = event.dataTransfer.files[0];

		webbg.style.backgroundImage = `url("${file.path.replace(/\\/g, "/")}")`;

		event.preventDefault();
	});
});
