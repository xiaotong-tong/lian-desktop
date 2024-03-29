const { ipcRenderer } = require("electron");
// const { showTextBrowser } = require("xtt-msg");

ipcRenderer.on("show-message", async (e, msg) => {
	ipcRenderer.send("showWindow", "msg");
	const textEL = document.querySelector(".text");
	const textContent = document.querySelector(".textContent");
	// textContent.textContent = await showTextBrowser(msg);
	textContent.textContent = msg;

	setTimeout(() => {
		ipcRenderer.send("hideWindow", "msg");
	}, 5000);
});

let dragging = false;
let dragEvent = false;
let mouseX = 0;
let mouseY = 0;
window.addEventListener("click", (e) => {
	if (!dragEvent) {
		ipcRenderer.send("hideWindow", "msg");
	}
	dragEvent = false;
});
window.addEventListener("mousedown", (e) => {
	dragging = true;
	const { pageX, pageY } = e;
	mouseX = pageX;
	mouseY = pageY;

	changePosition = async (e) => {
		document.documentElement.style.opacity = ".6";
		if (dragging) {
			const { pageX, pageY } = e;
			const pos = await ipcRenderer.invoke("getWinPosition", "msg");
			pos[0] = pos[0] + pageX - mouseX;
			pos[1] = pos[1] + pageY - mouseY;
			ipcRenderer.send("setWinPosition", "msg", pos[0], pos[1]);

			dragEvent = true;
		}
	};

	window.addEventListener("mousemove", changePosition);

	window.addEventListener("mouseup", () => {
		dragging = false;
		document.documentElement.style.opacity = "1";
		window.removeEventListener("mousemove", changePosition);
	});
});
